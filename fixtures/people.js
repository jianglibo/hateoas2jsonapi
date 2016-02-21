module.exports = {
  list: {
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
  },
  one: {
    "id": 1,
    "displayName": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
    "level": 1,
    "roles": [{
      "name": "ROLE_USER",
      "id": 1
    }],
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
};
// var express = require('express');
// var peopleRouter = express.Router();
//
// var userList = function() {
//   return ;
// };
//
// var postResult = {
//   "id": 262144,
//   "createdAt": new Date(),
//   "archived": false,
//   "keyId": "54E2D474536248D3A447F5E82DBB8392",
//   "keySecret": "76bbb7e12319416599dbbe2d52481410",
//   "useTimes": 0,
//   "_embedded": {
//     "creator": {
//       "id": 3,
//       "displayName": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
//       "level": 1,
//       "avatar": "",
//       "gender": "FEMAIL",
//       "email": "1b6e5cf7a5f6434a934f9a040b65238a@m3958.com",
//       "ucOpenId": "1b6e5cf7a5f6434a934f9a040b65238a",
//       "roles": [{
//         "name": "ROLE_USER"
//       }, {
//         "name": "ROLE_WORKER"
//       }],
//       "createdAt": "2015-08-27T02:39:31.761+0000",
//       "lastScheduleExec": null,
//       "_links": {
//         "self": {
//           "href": "http://localhost/api/v1/people/3{?projection}",
//           "templated": true
//         }
//       }
//     }
//   },
//   "_links": {
//     "self": {
//       "href": "http://localhost/api/v1/people/262144{?projection}",
//       "templated": true
//     },
//     "creator": {
//       "href": "http://localhost/api/v1/people/262144/creator"
//     }
//   }
// };
//   var kps = {
//     "_links": {
//       "self": {
//         "href": "http://localhost/api/v1/keypairs{?page,size,sort,projection}",
//         "templated": true
//       }
//     },
//     "page": {
//       "size": 20,
//       "totalElements": 0,
//       "totalPages": 0,
//       "number": 0
//     }
//   };
//
//   var getOne = function(id) {
//     one.id = id;
//     one.level = parseInt(id, 10);
//     return one;
//   };
//
//
//   peopleRouter.get('/', function(req, res) {
//     var id = req.query.id,
//       page = req.query.page || "0";
//
//     if (id) {
//       res.send(getOne(id));
//     } else {
//       var ul = userList();
//       if (page === "0") {
//         ul._embedded.people.pop();
//       } else {
//         ul._embedded.people.shift();
//         ul._embedded.people.shift();
//       }
//       res.send(ul);
//     }
//   });
//
//   peopleRouter.post('/', function(req, res) {
//     res.status(201).json(postResult);
//   });
//
//
//
//   peopleRouter.get('/:id', function(req, res) {
//     var id = req.params.id;
//     res.send(one);
//   });
//
//   peopleRouter.get('/:uid/keypairs', function(req, res) {
//     res.send(kps);
//   });
//
//   peopleRouter.put('/:id/update', function(req, res) {
//     res.status(204).end();
//   });
//
//   peopleRouter.delete('/:id', function(req, res) {
//     res.status(204).end();
//   });
//
//   app.use('/api/v1/people', peopleRouter);
// };
