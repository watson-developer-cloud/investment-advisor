/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

var twitter = require('twitter'),
    logger  = require('../config/logger'),
    util    = require('util');

var MAX_COUNT = 200;

/**
 * Create a TwitterHelper object
 * @param {Object} config configuration file that has the
 * app credentials.
 */
function TwitterHelper(credentials) {
  this.count = 0;
  this.clients = [];
  var self = this;
  credentials.forEach(function(credential){
    if (credential.enabled !== false) {
      self.clients.push(new twitter(credential));
    }
  });
  logger.info('Initialized ' + self.clients.length +' twitter clients');
}

TwitterHelper.prototype.getInstance = function () {
  var instance = this.count % this.clients.length;
  this.count ++;

  logger.debug('Using Twitter Client instance Nº',instance);
  return this.clients[instance];
};

TwitterHelper.prototype.api = function (method, args) {
  var parameters = Array.prototype.slice.call(args).slice(0, args.length-1);
  var callback = args[args.length-1];

  var wrappedCallback = function (err, data) {
    if (err) {
      logger.error('Error calling \'' + parameters[0] + '\' api ['+ method.toUpperCase() + ']. ' + err);
      callback && callback(err);
    } else {
      callback && callback(undefined, data);
    }
  };

  var instance = this.getInstance();

  if (method == "post") {
    var method_call = instance.post;
  } else if (method == "get") {
    var method_call = instance.get;
  } else {
    throw 'Method \'' + method + '\' not implemented.';
  }

  method_call.apply(instance, parameters.concat([wrappedCallback]));
};

TwitterHelper.prototype.get = function () {
  this.api("get", arguments);
}

TwitterHelper.prototype.post = function () {
  this.api("post", arguments);
}

/**
 * @return {boolean} True if tweet is not a re-tweet or not in english
 */
var englishAndNoRetweet = function(tweet) {
  return tweet.lang === 'en' && !tweet.retweeted;
};

/**
 * Transform Tweets to ContentItems to be used
 * @param  {Twitter tweet} A tweet from the Twitter API
 */
var toContentItem = function(tweet) {
  return {
    id: tweet.id_str,
    userid: tweet.user.id_str,
    sourceid: 'twitter',
    language: 'en',
    contenttype: 'text/plain',
    content: tweet.text.replace('[^(\\x20-\\x7F)]*',''),
    created: Date.parse(tweet.created_at)
  };
}

/**
 * Transform a twitter user to our app user
 * @param  {Twitter User} twitter representation of a user
 * @return {models.User}     internal representation of a user
 */
var toAppUser = function(user) {
  return {
    id: user.id_str,
    name: user.name,
    username: user.screen_name.toLowerCase(),
    contentitems: user.statuses_count,
    image: user.profile_image_url,
    language: user.lang
  };
}

/**
 * Get the tweets based on the given screen_name.
 * Implemented with recursive calls that fetch up to 200 tweets in every call
 * Only returns english and original tweets (no retweets)
 */
TwitterHelper.prototype.getTweets = function(user_id, callback) {
  logger.info('getTweets for:', user_id);

  var self = this,
    tweets = [],
    params = {
      user_id: user_id,
      count: MAX_COUNT,
      exclude_replies: true,
      trim_user:true};

  var processTweets = function(err, _tweets) {
    // Check if _tweets its an error
    if (err) return callback(err);

    var items = _tweets
    .filter(englishAndNoRetweet)
    .map(toContentItem);

    tweets = tweets.concat(items);
    logger.debug('Obtained', tweets.length, 'tweets from user', user_id);
    if (_tweets.length > 1) {
      params.max_id = _tweets[_tweets.length-1].id - 1;
      self.get("statuses/user_timeline", params, processTweets);
    } else {
       callback(null, tweets);
    }
  };
  self.get("statuses/user_timeline", params, processTweets);
};

/**
 * Show Twitter user information based on screen_name
 */
TwitterHelper.prototype.getUser = function(user_id, callback) {
  this.get("users/show", {user_id : user_id}, function(err, user) {
    if (!err) {
      callback(undefined, toAppUser(user));
    }
  });
};

module.exports = TwitterHelper;
