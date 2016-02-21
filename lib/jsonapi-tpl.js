module.exports = {
  listData: function() {
    return {
      data: [],
      meta: {}
    };
  },
  errorData: function() { //http://jsonapi.org/format/#errors
    return {
      errors: []
    };
  },
  singleData: function(type) { //http://jsonapi.org/format/#document-resource-objects
    return {
      data: {
        id: null,
        type: type,
        attributes: {},
        relationships: {},
        links: {},
        meta: {}
      }
    };
  }
};
