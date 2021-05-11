

Quick start
-----------

Note: You can prepare many many test cases based on the samples to let Go4Api run for you.

### A simple case, with hard-coded Json:
#### Prepare the Json:

```js
[
  {
    "FirstTestCase-001": {
      "priority": "3",
      "parentTestCase": "root",
      "request": {
        "method": "GET",
        "path": "https://api.douban.com/v2/movie/top250",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
        },
        "queryString": {
          "pageIndex": "1",
          "pageSize": "12"
        }
      },
      "response": [
        {
          "$(status).statusCode": {
            "Equals": 200
          }
        },
        {
          "$(headers).Content-Type": {
            "Contains": "application/json;charset=UTF-8"
          }
        },
        {
          "$(body).start": {
            "GreaterOrEquals": 0
          }
        },
        {
          "$(body).subjects.#": {
            "Equals": 20
          }
        },
        {
          "$(body).total": {
            "Equals": 250
          }
        },
        {
          "$(body).subjects.0.title": {
            "Contains": "肖申克的救赎"
          }
        }
      ]
    }
  }
]
```

#### Running go4api

```js
suppose download the repo to your home diretory

$./go4api-mac-0.71.8 -run -c testconfig/config.json  -tc  testdata -tr testresource -js jsFuncs -r testresults
```


### A much more real case, with variables in Json:
#### Prepare the Json:

SecondTeseCase.json
```js
[
  {
    "SecondTestCase-${tc}": {
      "priority": "${priority}",
      "parentTestCase": "root",
      "request": {
        "method": "GET",
        "path": "/v2/movie/top250",
        "headers": {
          "authorization": "${authorization}"
        },
        "queryString": {
          "pageIndex": "1",
          "pageSize": "12"
        }
      },
      "response": [
        {
          "$(status).statusCode": {
            "Equals": {"Fn::ToInt": "${statuscode}"}
          }
        },
        {
          "$(headers).Content-Type": {
            "Contains": "application/json;charset=UTF-8"
          }
        }
      ]
    }
  }
]
```

SecondTeseCase_dt1.csv
```js
tc,priority,statuscode
dt1-1,1,500
dt1-2,2,500
```

#### Running go4api

```js
$./go4api-mac-0.71.8 -run -baseUrl https://api.douban.com -c testconfig/config.json  -tc  testdata -tr testresource -js jsFuncs -r testresults
```


More code snippets
-----------

#### Config file sample
```js
{
  "Local": {
      "baseUrl": "...",
      "mysql": {
          "master": {
              "ip": "",
              ...
          }
      },
      "postgresql": {
          "master": {
              "ip": "",
              ...
          }
      },
      "redis": {
          "master": {
              ...
          }
      },
      "mongoDB": {
          "master": {
              ...
          }
      }
  },
  "Dev": ...,
  "QA": ...,
  "UAT": ...
}
```

#### POST, application/json
```js
[
  {
    "tcname ...": {
      ...,
      "request": {
        "method": "POST",
        "path": "...",
        "headers": {
          "Content-Type": "application/json;charset=UTF-8"
        },
        "payload": {
          "text": {
                    "f_1": "v_1",
                    "f_2": "v_2"
                  }
        }
      },
      "response": ...
    }
  }
]
```

#### POST, multipart/form-data
```js
[
  {
    "tcname ...": {
      ...,
      "request": {
        "method": "POST",
        "path": "...",
        "headers": {
          "Content-Type": "multipart/form-data"
        },
        "payload": {
          "multipartForm": [
                  { 
                    "name": "fname_1",
                    "value": "fvalue_1"
                  },
                  {
                    "name": "fname_2",
                    "value": "fvalue_2.csv",
                    "type": "file",
                    "mIMEHeader": {
                      "content-type": "text/csv"
                    }
                  }
                ]
        }
      },
      "response": ...
    }
  }
]

```




Html Reporting
-----------
<p align="center">
  <img width="900" src="https://cdn.rawgit.com/zpsean/go4api/master/doc/4-html-report.png">
</p>

---
