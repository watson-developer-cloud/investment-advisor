Include the content items files here.

If your user defines an user id `{{USER_ID}}`, then you have to name the content
items file to `{{USER_ID}}.json`.

It's content should match the one defined by [Personality Insights service](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights/api/v2/#profile) as input:

```
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
