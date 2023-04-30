'use strict';

setTimeout(() => {
    console.log('timeout');
}, 0);

setImmediate(() => {
    console.log('immediate');
});

// setInterval(() => {
//     console.log('interval');
// }, 5000);
