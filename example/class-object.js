'use strict';

class User {

    constructor(size) {
        this.stackSize = size;
        this.myStack = [];
    }

    add(key, value) {
        if (this.myStack.length === this.stackSize) {

        }
        this.myStack.push({ key, value });
        console.log('Length ', this.myStack);
    }

    get(key) {
        const getValue = this.myStack.filter((element) => element.key === key);
        console.log('getValue ', getValue);
    }

}

// Usage:
let user = new User(5);
user.add('param', 5);
user.add('rum', 15);
user.get('param');
