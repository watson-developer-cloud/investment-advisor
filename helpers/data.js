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

var fs          = require('fs'),
    mongoose    = require('mongoose'),
    extend      = require('util')._extend,
    User        = mongoose.model('User'),
    ContentItem = mongoose.model('ContentItem'),
    Profile     = mongoose.model('Profile'),
    services    = require('../config/services'),
    logger      = require('../config/logger'),
    unmongoose  = require('./mongoose-utils').unmongoose;

// Possible sources
var SOURCES = {
    GENERIC : 'generic',
    TWITTER : 'twitter'
}

module.exports = function (twitter) {

  var self = {};

  /**
   * Load data from a JSON file on project's filesystem
   */
  function loadData(filepath) {
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }

  /**
   * Loads users' data
   */
  function loadUserData(userid) {
    return loadData('data/content_items/' + userid + '.json');
  }

  /**
   * Retrieves users' data
   */
  function getUsers() {
    self.users = self.users || loadData('data/users.json');
    return self.users;
  }

  /**
   * Updates an user with it's new config.
   */
  function updateUser(dbUser, userConfig) {
    dbUser = extend(dbUser, userConfig);
    dbUser.save(function (err) {
      if (err) {
        logger.error('Could not update user', dbUser.name, '(' + dbUser.id +')');
      }
    });
  }

  /**
   * Check if user is new. If new: call callback. Else: lazy init profile if
   * doesn't exist.
   */
  function checkNewUser(user, callback) {
    User.find({id : user.id}, function(err, users) {
      if (err) throw err;
      if (users.length == 0) {
        logger.info('New user', user.id);
        callback(user);
      } else {
        updateUser(users[0], user);
        Profile.find({userid: user.id}, function (err, profiles) {
          if (err) throw err;
          if (profiles.length == 0) {
            logger.info('User', user.name || user.id, 'has no profile yet. Requesting profile...');
            initProfile(user);
          }
        });
      }
    });
  }

  /**
   * Initializes user's profile
   */
  function initProfile(user) {

    // TODO FIX QUERY
    ContentItem.find({}).lean(true).exec(function (err, contentItems) {

      if (err) throw err;

      var contentItems = contentItems.filter(function (e) { return e.userid == user.id; }).map(unmongoose);

      var data = { contentItems : contentItems };
      services.personality_insights.profile(data, function (error, profile) {
        if (error) {
          logger.error('Error obtaning profile for user:', user.name || user.id);
        } else {
          Profile.create({ userid : user.id, value: JSON.stringify(profile) });
          logger.info('Saved profile for user', user.name);
        }
      });
    });
  }

  /**
   * Initializes a user obtained from twitter.
   */
  function initTwitterUser(category, user) {
    twitter.getUser(user.id, function (err, twitterUser) {
      user.category = category;
      user = extend(twitterUser, user);
      User.create(user);
      twitter.getTweets(user.id, function (err, tweets) {
        tweets.forEach(function (tweet) {
          ContentItem.create(tweet);
        });
        initProfile(user);
        logger.info('Saved user', user.name, '(' + user.id + ')', 'with', user.contentitems + ' tweets.');
      });
    });
  }

  /**
   * Initializes an user which data is file-stored.
   */
  function initGenericUser(category, user) {
    try {
      var contentItems = loadUserData(user.id).contentItems;
      user.category = category;
      user.contentitems = contentItems.length;
      User.create(user);
      contentItems.forEach(function (contentItem) {
        ContentItem.create(contentItem);
      });
      initProfile(user);
      logger.info('Saved user', user.name, '(' + user.id + ')', 'with', user.contentitems + ' content items.');
    } catch (err) {
      err.message = 'Error when saving user \'' + user.id + '\'\nRoot cause: ' + err.message;
      throw err;
    }
  }

  /**
   * Initializes an user.
   */
  function initUser(category, user) {
    if (user.source == SOURCES.TWITTER) {
      checkNewUser(user, initTwitterUser.bind(this, category));
    } else if (user.source == SOURCES.GENERIC) {
      checkNewUser(user, initGenericUser.bind(this, category));
    } else {
      throw 'Not valid source'; // TODO
    }
  }

  /**
   * Process all te users initializating them.
   */
  function processUsers(users) {
    Object.keys(users).forEach(function (category) {
      users[category].forEach(initUser.bind(this, category))
    });
  }

  /**
   * Remove not present users.
   */
  function removeNotPresent(users) {
    var ids = [];
    Object.keys(users).forEach(function (category) {
      users[category].forEach(function (u) { ids.push(u.id); });
    });

    User.find({}, function (error, oldUsers) {
      if (error) throw error;
      oldUsers.forEach(function (oldUser) {
        if (ids.indexOf(oldUser.id) === -1) {
          oldUser.remove();
          logger.info('User "', oldUser.name, '" (', oldUser.id, ') was removed.');
        }
      })
    })
  }

  /**
   * Initialize data:
   *  - Remove old users
   *  - Add new users
   */
  function init() {
    var users = getUsers()
    removeNotPresent(users);
    processUsers(users);
  }


  /* Module API */

  self.getUsers = getUsers;
  self.init = init;

  return self;
};
