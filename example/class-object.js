'use strict';

class User {

    constructor(size) {
        this.stackSize = size;
        this.myStack = [];
    }

    add(key, value) {
        if (this.myStack.length === this.stackSize)
            this.myStack.shift();
        this.myStack.push({ key, value });
        console.log('Operation: ', this.myStack);
    }

    get(key) {
        const getValue = this.myStack.filter((element) => element.key === key);
        if (getValue.length === 0) {
            console.log('Item not found.');
        } else {
            console.log('getValue ', getValue);
        }
    }

    show() {
        console.log('Stack ', this.myStack);
    }

}

// Usage:
let user = new User(3);
user.add('param', 5);
user.add('rum', 15);
user.add('shyam', 35);
user.add('jadu', 25);
user.get('shyam');
user.show();
