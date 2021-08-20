// // Person constructor
// function Person(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//   return `Welcome Mr. ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person proototype method
// Customer.prototype = Object.create(Person.prototype);

// // Make Customer.prototype return Customer();
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom', 'Foord', '012345', 'Silver');

// console.log(customer1);
// console.log(customer1.greeting());

//-------------------------------------------------------

// const personPrototype = {
//   greeting: function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName){
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototype);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Smith');
// console.log(mary.greeting());

// const brad = Object.create(personPrototype, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Doe'},
//   age: {value: 36}
// });

// console.log(brad.greeting());

//--------------------------------------------------------------------------

// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Amir', 'Hossein');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Ingerit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype to return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Alam', 'Khan', '321567', 'gold');

console.log(customer1);

Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}, Welcome!`;
}
console.log(customer1.greeting());

//------------------------------------------------------


// Object Prototype

const personPrototype = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototype);
  mary.firstName = 'Mary';
  mary.lastName = 'Affan';
  mary.age = 30;

mary.getsMarried('Smith');
console.log(mary);

const sam = Object.create(personPrototype, {
  firstName: {value: 'Sam'},
  lastName: {value: 'Affan'},
  age: {value: 33}
});

console.log(sam);
console.log(sam.greeting());
