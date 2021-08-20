// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// Single line function does not need braces
// const sayHello = () => console.log('Hello');


// const sayHello = function() {
//   return 'Hello';
// }


// Single line return
// const sayHello = () => 'Hello';

// const sayHello = function() {
//   return {msg: 'Hello'};
// }

// Single line object
// const sayHello = () => ({msg: 'HKello'});

// Single Parameter does not need parantasis 
const sayHello = (firstName, lastName) => console.log(`${firstName} ${lastName} is dumb`);

sayHello('Sam', 'Affan');



// Arrow function in Array
const users = ['Sam', 'Fariha', 'Nipu'];

// const nameLangth = users.map(function(name) {
//   return name.length;
// });

const nameLangth = users.map(name =>  name.length);

console.log(nameLangth);