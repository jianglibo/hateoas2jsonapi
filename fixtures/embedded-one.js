export default {
  "createdAt": "2015-08-29T08:17:29.986+0000",
  "archived": false,
  "reportTo": ["http://yourdomain.com/callback", "youremail@yourdomain.com", "137777777777"],
  "_embedded": {
    "creator": {
      "displayName": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
      "id": 3,
      "level": 1,
      "createdAt": "2015-08-29T08:17:29.705+0000",
      "gender": "FEMAIL",
      "email": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
      "avatar": "",
      "ucOpenId": "1b6e5cf7a5f6434a934f9a040b65238a",
      "roles": [{
        "name": "ROLE_WORKER"
      }, {
        "name": "ROLE_USER"
      }],
      "lastScheduleExec": null,
      "_links": {
        "self": {
          "href": "http://localhost/api/v1/shusers/3{?projection}",
          "templated": true
        }
      }
    },
    "tasks": [{
      "id": 1,
      "state": "UN_FETCHED",
      "createdAt": "2015-08-29T08:17:29.986+0000",
      "sourceFrom": "http://yourdomain.com/abc.apk",
      "feedbackUrl": "http://localhost/api/v1/taskitems/",
      "fetchedAt": null,
      "finishedAt": null,
      "_links": {
        "self": {
          "href": "http://localhost/api/v1/taskitems/1{?projection}",
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
  "_links": {
    "self": {
      "href": "http://localhost/api/v1/tasklists/1{?projection}",
      "templated": true
    },
    "tasks": {
      "href": "http://localhost/api/v1/tasklists/1/tasks"
    },
    "creator": {
      "href": "http://localhost/api/v1/tasklists/1/creator"
    },
    "keypair": {
      "href": "http://localhost/api/v1/tasklists/1/keypair"
    }
  }
};
