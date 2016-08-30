/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var db = require('mongoose'),
  extend = require('util')._extend,
  User = db.model('User'),
  Profile = db.model('Profile'),
  ContentItem = db.model('ContentItem'),
  Q = require('q'),
  unmongoose = require('../helpers/mongoose-utils').unmongoose;

/**
 * Controllers associated to users.
 */
module.exports = function (app) {

  /**
   * Retrieves the users list from MongoDB.
   */
  app.post('/users/list', function (req, res) {
    User.find({})
      .lean()
      .then(function (users) {

        Profile.find({})
          .lean()
          .then(function (profiles) {
            var profileDict = {};

            profiles.forEach(function (profile) {
              profileDict[profile.userid] = JSON.parse(profile.value);
            });

            users.forEach(function (_, i) {
              users[i] = extend({
                profile: profileDict[users[i].id]
              }, unmongoose(users[i]));
              if (profileDict[users[i].id])
                console.log(users[i].name, '(', users[i].id, ')', 'has profile');
            });

            return res.json(users);
          })
      });
  });

  /**
   * Retrieves the profile for the given user ID.
   */
  app.post('/users/profile', function (req, res) {
    Profile.findOne({
      userid: req.body.userid
    }, function (err, profile) {
      if (err) {
        return res.status(err.code || 500)
          .json(error.message || 'Error processing the request');
      } else {
        return res.json(JSON.parse(profile.value));
      }
    })
  });

  /**
   * Retrieves the content items for an User ID, with limit.
   */
  app.post('/users/contentItems', function (req, res) {
    ContentItem.find({
      userid: req.body.userid
    }).limit(req.body.limit || 10).sort({
      created: -1
    }).exec(function (err, contentItems) {
      if (err) {
        return res.status(err.code || 500)
          .json(error.message || 'Error processing the request');
      } else {
        return res.json(contentItems);
      }
    })
  });

}
