"use strict";

test("OK test", function (assert) {
    stop();

    var str = "";

    asyncForEach([1,2,3], function(element, index, done) {
        setTimeout(function() {
            str += element;
            done();
        }, 1000);
    }, function() {
        strictEqual(str, "123", "Concated array [1, 2, 3] equals to `123`");
        start();
    });

});

test("Immediate test", function (assert) {
    stop();

    var str = "";

    asyncForEach([1,2,3], function(element, index, done) {
        setTimeout(function() {
            str += element;
            done();
        }, 0);
    }, function() {
        strictEqual(str, "123", "Concated array [1, 2, 3] equals to `123`");
        start();
    });

});

test("Empty array test", function (assert) {
    stop();

    var str = "";

    asyncForEach([], function(element, index, done) {
        setTimeout(function() {
            str += element;
            done();
        }, 1000);
    }, function() {
        strictEqual(str, "", "Result is ``");
        start();
    });

});

test("Non-array first argument", function (assert) {

    assert.throws(
        function() {
            asyncForEach({}, function(element, index, done) {
                setTimeout(function() {
                    done();
                }, 1000);
            }, function() {
                start();
            });
        },
        "throws error about invalid first argument"
    );

});

test("No iterator provided", function (assert) {

    assert.throws(
        function() {
            asyncForEach([1, 2, 3]);
        },
        "throws error about invalid second argument"
    );

});
