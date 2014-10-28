#!/usr/bin/env node

require('../..')(2, function (assert) {
    var count = require('../../count')
    var arr = [ "one", "two", "three" ]
    assert(count(arr), [ 3, 'one', 3, 'two', 5, 'three' ], 'add lengths')
   
    var arr2 = [ "one", "two", 3 ]

    try { 
        count(arr2)
    } catch (e) {
        assert(e.message, 'Array element not a string.', 'throws expected exception')
    }
})