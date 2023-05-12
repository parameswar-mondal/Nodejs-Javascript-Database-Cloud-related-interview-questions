'use strict';

// Sort by object key value within an array
let users = [
    { name: 'john', lname: 'doe', address: 'Alaska' },
    { name: 'tom', lname: 'hopes', address: 'California' },
    { name: 'harry', address: 'Texas' },
    { name: 'param', lname: 'mondal', address: 'msd' },
    { name: 'debo', lname: 'chak', address: 'nai' },
];
let result1 = users.sort((a, b) => a.name.localeCompare(b.name)); // use inbuild function
let result2 = users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name)
        return -1;
    return 0;
});
console.log('result1= ', result1);
console.log('result2= ', result2);
