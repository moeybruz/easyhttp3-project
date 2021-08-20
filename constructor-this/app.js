// Person Constructor
function Person(name, dob){
  this.name = name;
  this.birthday =new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// console.log(this);
// this.alert("Hahahahahah");

const brad = new Person("Brad", "09-28-1987");
// const john = new Person("John");

 console.log(brad.calculateAge());