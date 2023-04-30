'use strict';

const palindrome = (randomString = "") => {
    if (randomString) {
        randomString = randomString.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
        let reverseString = randomString.split("").reverse().join("");
        return (randomString === reverseString) ? true : false;
    }
    return false;
}

const result = palindrome("madam") ? 'a palindrome' : 'not a palindrome';
console.log(`The Given String is ${result}`);

