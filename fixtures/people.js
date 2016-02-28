export default () => {
  return {
    "_links": {
      "self": {
        "href": "http://localhost/api/v1/people{?page,size,sort,projection}",
        "templated": true
      },
      "search": {
        "href": "http://localhost/api/v1/people/search"
      }
    },
    "_embedded": {
      "people": [{
        "id": 1,
        "displayName": "demouser",
        "name": "demouser",
        "roles": [{
          "name": "ROLE_USER",
          "id": 1
        }],
        "level": 1,
        "createdAt": "2015-09-01T14:41:59.074+0000",
        "lastScheduleExec": null,
        "avatar": null,
        "enabled": false,
        "gender": "FEMAIL",
        "email": "demouser@m3958.com",
        "ucOpenId": "3a36b20ea7a34d5282b07bcb15c651e8",
        "_embedded": {
          "roles": [{
            "name": "ROLE_USER",
            "id": 1,
            "_links": {
              "self": {
                "href": "http://localhost/api/v1/roles/1{?projection}",
                "templated": true
              }
            }
          }]
        },
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/people/1{?projection}",
            "templated": true
          },
          "roles": {
            "href": "http://localhost/api/v1/people/1/roles"
          },
          "taskLists": {
            "href": "http://localhost/api/v1/people/1/taskLists"
          },
          "keypairs": {
            "href": "http://localhost/api/v1/people/1/keypairs"
          }
        }
      }, {
        "id": 2,
        "displayName": "demouser1",
        "name": "demouser1",
        "roles": [{
          "name": "ROLE_USER",
          "id": 1
        }],
        "level": 1,
        "createdAt": "2015-09-01T14:41:59.092+0000",
        "lastScheduleExec": null,
        "avatar": null,
        "gender": "FEMAIL",
        "enabled": true,
        "email": "demouser1@m3958.com",
        "ucOpenId": "1a36b20ea8a34d5282b07bcb15c651e1",
        "_embedded": {
          "roles": [{
            "name": "ROLE_USER",
            "id": 1,
            "_links": {
              "self": {
                "href": "http://localhost/api/v1/roles/1{?projection}",
                "templated": true
              }
            }
          }]
        },
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/people/2{?projection}",
            "templated": true
          },
          "roles": {
            "href": "http://localhost/api/v1/people/2/roles"
          },
          "taskLists": {
            "href": "http://localhost/api/v1/people/2/taskLists"
          },
          "keypairs": {
            "href": "http://localhost/api/v1/people/2/keypairs"
          }
        }
      }, {
        "id": 4,
        "displayName": "96ad56@m3958.com",
        "name": "中文名",
        "enabled": "true",
        "roles": [{
          "name": "ROLE_USER",
          "id": 1
        }, {
          "name": "ROLE_USER_MANAGER",
          "id": 4
        }],
        "level": 1,
        "createdAt": "2015-09-01T14:42:00.273+0000",
        "lastScheduleExec": null,
        "avatar": "",
        "gender": "FEMAIL",
        "email": "96ad5c25402c4e57854510da6e1e6146@m3958.com",
        "ucOpenId": "96ad5c25402c4e57854510da6e1e6146",
        "_embedded": {
          "roles": [{
            "name": "ROLE_USER",
            "id": 1,
            "_links": {
              "self": {
                "href": "http://localhost/api/v1/roles/1{?projection}",
                "templated": true
              }
            }
          }, {
            "name": "ROLE_USER_MANAGER",
            "id": 4,
            "_links": {
              "self": {
                "href": "http://localhost/api/v1/roles/4{?projection}",
                "templated": true
              }
            }
          }]
        },
        "_links": {
          "self": {
            "href": "http://localhost/api/v1/people/4{?projection}",
            "templated": true
          },
          "roles": {
            "href": "http://localhost/api/v1/people/4/roles"
          },
          "taskLists": {
            "href": "http://localhost/api/v1/people/4/taskLists"
          },
          "keypairs": {
            "href": "http://localhost/api/v1/people/4/keypairs"
          }
        }
      }]
    },
    "page": {
      "size": 2,
      "totalElements": 3,
      "totalPages": 2,
      "number": 0
    }
  };
};
