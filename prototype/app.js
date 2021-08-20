//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const sam = new Person('Sam', 'Aff', '09-28-1987');
const maira = new Person('Maira', 'Aff', '04-16-1992');

maira.getsMarried('Affan');

console.log(sam);
console.log(maira.getFullName());
console.log(sam.getFullName());
console.log(maira.hasOwnProperty('dob'));