let helloGeeks = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Hello Geeks!')
})

let defaultResponse = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Response timeout!');
})

Promise.race([helloGeeks, defaultResponse]).then((value) => {
    console.log(value);
});

Promise.all([helloGeeks, defaultResponse]).then((data) => {
    console.log('data ', data);
});

Promise.allSettled([helloGeeks, defaultResponse]).then((allData) => {
    console.log('allData ', allData);
});

console.log('hello world');
