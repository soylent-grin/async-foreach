# Async-foreach

```
npm install

npm run tests
```

### Usage

```
var asyncForEach = require('path/to/async-for-each');

asyncForeach([1, 2, 3], function(item, index, done) {
    setTimeout(function() {
        console.log(item);
        done();
    }, 1000);
}, function() {
    console.log('end');
});
```