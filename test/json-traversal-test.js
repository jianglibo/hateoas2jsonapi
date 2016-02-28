import traversal from "src/json-traversal";

describe('should traversal all node.', () => {

  // var visitor;
  // var count = 0;
  //
  // beforeEach(function() {
  //
  //   };
  //
  //   spyOn(visitor, 'visit');
  //
  //   visitor.visit(1, 2, 3);

  // });

  it('should equal', () => {
    var count = 0;
    var visitor = {
      visit: function(parent, key, obj) {
        // console.log(key);
        // console.log(obj);
        count++;
      }
    };
    traversal({
      a: 0,
      b: {
        c: 'x'
      },
      ary: [{
        x: 1
      }, {
        y: 2
      },
      0
    ]
    }, visitor);

    expect(count).toEqual(4);

  });

});
