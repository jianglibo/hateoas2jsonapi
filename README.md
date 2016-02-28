# JsonConverter

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
