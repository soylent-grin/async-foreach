"use strict";

/**
 * Async forEach implementation
 *
 * @param array - Array, iterable array of elements
 * @param iterator - function(element, index, done), invoke on each iteration
 * @param callback - function, invoked on iteration end
 *
 * @return void
 */
var asyncForEach = function(array, iterator, callback) {
    var index = -1;

    if (!(array instanceof Array)) {
        throw new Error('first argument is required to be an array');
    }

    if (!iterator || typeof iterator !== "function") {
        throw new Error('second argument required to be a function');
    }

    (function innerIterator() {
        if (++index < array.length) {
            return iterator(array[index], index, innerIterator.bind(this));
        } else {
            return callback && callback();
        }
    })();
}

module.exports = asyncForEach;