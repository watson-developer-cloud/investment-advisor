# Investment Advisor

  The Investment Advisor Demo combines IBM Watson Personality Insights and IBM
  Watson Tradeoff Analytics services to recommend suitable funds and agents for
  clients. Fund recommendation is based on a client's risk propensity. Agent
  recommendation focuses on building long-term relationships with clients.

  Try Investment Advisor! Click the button below to fork into IBM DevOps
  Services and deploy your own copy of this application on Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)][deploy2bluemix]

## Getting Started


1. Create a Bluemix Account

    [Sign up][sign_up] in Bluemix, or use an existing account.

1. Download and install the [Cloud-foundry CLI][cloud_foundry] tool

1. Edit the `manifest.yml` file and change the `<application-name>` to something unique.
  ```none
  applications:
  - name: <application-name>
    command: node app.js
    path: .
    memory: 1G
    services:
    - personality-insights-service-standard
    - tradeoff-analytics-service-standard
  ```
  The name you use will determinate your application url initially, e.g. `<application-name>.mybluemix.net`.

1. Create a FREE Mongodb database using [MongoLab](https://mongolab.com/).

1. Copy the database url for MongoDB to `credentials.js`, under `database` key.

1. You may optionally modify the `users.json` file inside `data` folder. See [Setting up users and funds data](#setting-up-users-and-funds-data) section for more information.

1. Connect to Bluemix in the command line tool.
  ```sh
  $ cf api https://api.ng.bluemix.net
  $ cf login -u <your user ID>
  ```

1. Create the Tradeoff Analytics service in Bluemix.
  ```sh
  $ cf create-service tradeoff_analytics standard tradeoff-analytics-service-standard
  ```

1. Create the Personality Insights service in Bluemix.
  ```sh
  $ cf create-service personality_insights tiered personality-insights-service-standard
  ```

1. Push it live!
  ```sh
  $ cf push
  ```

See the full [Getting Started][getting_started] documentation for more details, including code snippets and references.

## Running locally

  The application uses [Node.js][nodejs] and [npm][npm] so you will have to download and install them as part of the steps below.

1. Copy the credentials from your `personality-insights-service-standard` and `tradeoff-analytics-service-standard` service in Bluemix to `credentials.js`, you can see the credentials using:

    ```sh
    $ cf env <application-name>
    ```
    Example output:
    ```sh
    System-Provided:
    {
    "VCAP_SERVICES": {
      "tradeoff_analytics": [{
          "credentials": {
            "url": "<url>",
            "password": "<password>",
            "username": "<username>"
          },
        "label": "tradeoff-analytics",
        "name": "tradeoff-analytics-standard-service",
        "plan": "standard"
     }]
    }
    }
    ```

    You need to copy `username`, `password` and `url`.

2. Copy the credentials for MongoDB service in Bluemix to `credentials.js`, under `database` key.
3. Install [Node.js][nodejs]
4. Go to the project folder in a terminal and run:
    `npm install`
5. Start the application
6.  `npm start`
7. Go to `http://localhost:3000`

## Setting up users and funds data

  The folder `data` contains the users and funds data files.

  - `users.json` contains all the application's users. For each user, you can specify
    one of two sources:
    - `generic`: The application expects to find user's content items in
      `data/content_items` folder. This files are according to Personality Insight's
      input definition, for example:

      ```json
        {
          "contentItems": [
            {
              "id": "245160944223793152",
              "userid": "bob",
              "sourceid": "twitter",
              "created": 1427720427,
              "updated": 1427720427,
              "contenttype": "text/plain",
              "charset": "UTF-8",
              "language": "en-us",
              "content": "This is a sample tweet",
              "parentid": "",
              "reply": false,
              "forward": false
            },
            //...
          ]
        }
      ```
    - `twitter`: The application uses the user id as a TwitterID and will retrieve
      the user's data from twitter.
    In any case, you can specify/override the user's data in the `users.json`.
    You can find an example of this file in `data/users.json.example`.
  - `recommendations` contains three files used to generate the recommendations:
    - `communication_channels.json`:
    - `funds_dilemma.json`: this is the dilemma file to be used in Tradeoff Analytics
      analysis.
    - `funds_personality.json`: this data is used to generate the matching between
      clients and funds. Also provides engagement messages and strategies.
  - `portraits` contains images to be used as portraits.


## License

  This application code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

## Known bugs

  No known bugs.

## Troubleshooting

To troubleshoot your Bluemix app the main useful source of information are the logs, to see them, run:

  ```sh
  $ cf logs <application-name> --recent
  ```

## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

[deploy2bluemix]:https://bluemix.net/deploy?repository=https://github.com/watson-developer-cloud/investment-advisor
[npm]:https://www.npmjs.com/
[nodejs]:http://nodejs.org/
[cloud_foundry]: https://github.com/cloudfoundry/cli
[getting_started]: http://www.ibm.com/watson/developercloud/doc/getting_started/
[sign_up]: https://console.ng.bluemix.net/registration/?target=/catalog/services/personality-insights/
