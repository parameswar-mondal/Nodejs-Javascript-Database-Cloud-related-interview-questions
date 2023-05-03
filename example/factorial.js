'use strict';

function factorial(n) {
    if (n < 0) {
        return "number has to be positive."
    }
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

function getLetter(s) {
    let letter;
    // Write your code here
    let strArr = s.split('');
    let firstChar = strArr[0];
    switch (firstChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = "B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C";
            break;
        default:
            letter = "D";
            break;
    }
    return letter;
}
console.log(getLetter("dfgt"));