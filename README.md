# JsonConverter

[![Build Status](https://travis-ci.org/jianglibo/json-converter.svg?branch=master)](https://travis-ci.org/jianglibo/json-converter)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/jianglibo.svg)](https://saucelabs.com/u/jianglibo)

convert json object's value. Usually use to convert server response data format, for instance from hateoas to jsonapi, If your server is spring data, and javascript side is Emberjs.


# Design

Use visitor pattern.

entry point:

```js
traversal(obj,visitors);
```

every visitor in visitors's visit method will be called with three parameters.

```js
visit(parent, key, obj);
```

* parent, obj's parent object, for top object, it's value is null.
* key, parent[k] === obj.
* obj, the obj for you to convert.

as a convention, if your visitor doesn't change json's structure,you can put them as an array to traversal, or else it's better to traverse object separate. any way, you can decide how to implentation.

# How to use Hateoas2Jsonapi

convert hateoas response to jsonapi, you must provide extra information to converter. For example, this is a response.

fixtrures/person.js
```json
{
    "id": 1,
    "displayName": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
    "level": 1,
    "roles": [{
      "name": "ROLE_USER",
      "id": 1
    }],
    "_embedded": {
      "creator": {
        "displayName": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
        "id": 3,
        "level": 1,
        "createdAt": "2015-08-29T08:17:29.705+0000",
        "gender": "FEMAIL",
        "avatar": "",
        "roles": [{
          "name": "ROLE_WORKER"
        }, {
          "name": "ROLE_USER"
        }],
        "lastScheduleExec": null,
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/people/3{?projection}",
            "templated": true
          }
        }
      },
      "tasks": [{
        "id": 1,
        "state": "UN_FETCHED",
        "createdAt": "2015-08-29T08:17:29.986+0000",
        "feedbackUrl": "http://localhost/api/v1/tts/",
        "fetchedAt": null,
        "finishedAt": null,
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/tts/1{?projection}",
            "templated": true
          }
        }
      }, {
        "id": 2,
        "state": "UN_FETCHED",
        "createdAt": "2015-08-29T08:17:29.986+0000",
        "sourceFrom": "/local.apk",
        "feedbackUrl": "http://localhost/api/v1/taskitems/",
        "fetchedAt": null,
        "finishedAt": null,
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/taskitems/2{?projection}",
            "templated": true
          }
        }
      }]
    },
    "createdAt": "2015-08-18T01:00:06.723+0000",
    "lastScheduleExec": null,
    "gender": "FEMAIL",
    "avatar": "",
    "email": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
    "ucOpenId": "1b6e5cf7a5f6434a934f9a040b65238a",
    "_links": {
      "self": {
        "href": "http://localhost/api/v1/people/3{?projection}",
        "templated": true
      }
    }
  }
```
You have no idea of which type of model this response stand for. and you cannot decide what "roles" field mean, in the "_embedded" field, we can guess it, but it's not accurate. So, *** We must identify all the model type the response contains ***, In other word, You must know exactly your app's data structure.

in the test folder, there is a tutils.js, which is a configuration pass to converter.

```js
export function opts() {
  return {
    typePathMap: {
      person: { //for response for person model. /api/people/1, or /api/people
        role: "roles|_embedded/roles", // start from main model, roles, or _embedded.roles may contain role model.
        person: "_embedded/creator",
        task: "_embedded/tasks"
      }
    }
  };
}
```
Now, in test/hateoas2jsonapi/hateoas2jsonapi-test.js

```js
    let convertor = new Hateoas2Jsonapi(opts());
    let p = person();
    let result = convertor.convert(p, "person"); // for every convert action, pass in the main model name.
    // p is response from server.
```

# For Emberjs Data

I'm not write a ember plugin, instead write a general convertor, you can import the converter in you ember app. just write some hook in adapter.
