'use strict';

// this binding: Apply vs. Call vs. Bind Examples

// Call: Call invokes the function and allows you to pass in arguments one by one.
// Apply: Apply invokes the function and allows you to pass in arguments as an array.
// Bind: Bind returns a new function, allowing you to pass in a this array and any number of arguments.


var person1 = { firstName: 'Parameswar', lastName: 'Mondal' };
var person2 = { firstName: 'Gabbar', lastName: 'Sing' };

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

// Call
say.call(person1, 'Hello'); // Hello Parameswar Mondal
say.call(person2, 'Hello'); // Hello Gabbar Sing


// Apply
say.apply(person1, ['Hello']); // Hello Parameswar Mondal
say.apply(person2, ['Hello']); // Hello Gabbar Sing


// Bind
var sayHelloParam = say.bind(person1, 'Hello');
var sayHelloGabbar = say.bind(person2, 'Hello');
sayHelloParam(); // Hello Parameswar Mondal
sayHelloGabbar(); // Hello Gabbar Sing
