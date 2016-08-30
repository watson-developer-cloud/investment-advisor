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

var services = require('../config/services');

/**
 * Controllers to proxy services
 */
module.exports = function (app) {

  app.post('/services/profile', function (req, res) {
    var parameters = req.body;

    services.personality_insights.profile(parameters, function (error, profile) {
      if (error)
        return res.status(error.code || 500)
          .json(error.error || 'Error processing the request');
      else
        return res.json(profile);
    });
  });

  app.post('/services/dilemmas', function (req, res) {
    services.tradeoff_analytics.dilemmas(req.body, function (error, dilemmas) {
      error && console.log(error);
      if (error)
        return res.status(error.code || 500)
          .json(error.error || 'Error processing the request');
      else
        return res.json(dilemmas);
    });
  });

};
