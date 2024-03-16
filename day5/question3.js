//question3: Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
      return this.age;
    }
    getGender() {
      return this.gender;
    }
    getOccupation() {
      return this.occupation;
    }
    setOccupation(occupation) {
      this.occupation = occupation;
    }
    toString() {
      return `Person: ${this.getFullName()}, Age: ${this.getAge()}, Gender: ${this.getGender()}, Occupation: ${this.getOccupation()}`;
    }
  }  
  var person1 = new Person("John", "Doe", 30, "Male", "Software Engineer");
  console.log(person1.toString());
  person1.setOccupation("Data Scientist");
  console.log(person1.toString());