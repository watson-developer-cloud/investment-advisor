/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {

  // MongoDB
  database: {
    url : "mongodb://<username>:<password>@<host>/<database>"
  },

  tradeoff_analytics : {
    username : '<username>',
    password : '<password>',
    version  : 'v1'
  },

  personality_insights : {
    username : '<username>',
    password : '<password>',
    version  : 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: [
    {
      consumer_key :        '<consumer_key>',
      consumer_secret  :    '<consumer_secret>',
      access_token_key :    '<access_token_key>',
      access_token_secret : '<access_token_secret>',
      enabled : false // Disabled since this is just an example
    }
  ]
};
