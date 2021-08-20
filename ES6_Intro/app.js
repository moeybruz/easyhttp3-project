// class Person {
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date (dob);
//   }

//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName){
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y){
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Aff', '09-28-1987');

// mary.getsMarried('Bitch');

// console.log(mary);

// console.log(mary.greeting());

// console.log(mary.calculateAge());

// console.log(Person.addNumbers(3,4));




//------------------------------------------
// WITHOUT CLASS - SAME AGE CALCULATOR    //
//------------------------------------------

// Person constructor
// function Person(name, dob){
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
// }

// const sam = new Person('Sam', '09-28-1987');

// console.log(sam.calculateAge());





//---------------------------------//
//       SUB CLASSES               //
//---------------------------------//


class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const sam = new Customer('Sam', 'Aff', '012345', 'Standard');

console.log(sam.greeting());
console.log(Customer.getMembershipCost());