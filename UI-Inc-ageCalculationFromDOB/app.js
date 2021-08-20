// Person constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);

  // Calculate age function
  this.calculateAge = function(){
    // Calculate difference of unix timestamp
    const diff = Date.now() - this.birthday.getTime();

    // Get the initial date from the difference
    const ageDate = new Date(diff);

    // Convert the initial date to standard
    return ageDate.getUTCFullYear() - 1970;
  }
}

const brad = new Person('Brad', '10/02/1990');
console.log(brad.calculateAge());
