

// Case 1:

// let user = {
//     firstname: "param",
//     lastname: "mondal"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'firstname');
// console.log(JSON.stringify(descriptor));

// for (let x in user) {
//     console.log(x, '=> ', user[x]);
// }

// console.log('user => ', user);
// console.log('user firstname => ', user.firstname);

// user.firstname = 'parameswar';
// console.log('user updated firstname => ', user.firstname);

// user.phone = '1234567890';
// console.log('user phone => ', user.phone);
// console.log('final user => ', user);


// Case 2:

let user2 = {};

Object.defineProperty(user2, "firstname", {
    value: "param"
});

Object.defineProperty(user2, "lastname", {
    value: "mondal"
});

let descriptor = Object.getOwnPropertyDescriptor(user2, 'firstname');
console.log(JSON.stringify(descriptor, null, 2));

for (let y in user2) {
    console.log('y =>', y, '=> ', user2[y]);
}

console.log('user2 => ', user2);
console.log('user2 firstname => ', user2.firstname);

user2.firstname = 'parameswar';
console.log('user2 updated firstname => ', user2.firstname);

user2.phone = '1234567890';
console.log('user2 phone => ', user2.phone);
console.log('final user2 => ', user2);

for (let z in user2) {
    console.log('z =>', z, '=> ', user2[z]);
}
