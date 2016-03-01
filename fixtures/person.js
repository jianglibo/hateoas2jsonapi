export default () => {
  return {
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
  };
};
