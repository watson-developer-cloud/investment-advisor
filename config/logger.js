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

var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        // new winston.transports.File({
        //     level: 'info',
        //     filename: './logs/app.log',
        //     handleExceptions: true,
        //     json: false,
        //     maxsize: 5242880, //5MB
        //     maxFiles: 5,
        //     colorize: false
        // }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            prettyPrint: true,
            silent: false,
            timestamp: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message){
        logger.info(message);
    }
};
