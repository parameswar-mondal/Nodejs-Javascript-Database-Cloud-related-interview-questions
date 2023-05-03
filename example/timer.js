'use strict';

// Solution-1
function abc() {
    console.log('abc Start');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log('abc middle ', i);
        }, 1000);
    }
    console.log('abc End');
}
abc();

// Solution-2
function xyz() {
    console.log('xyz Start');
    for (var i = 0; i < 5; i++) {
        (function (j) {
            setTimeout(() => {
                console.log('xyz middle ', j);
            }, 1000);
        })(i);
    }
    console.log('xyz End');
}
xyz();