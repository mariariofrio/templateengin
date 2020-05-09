// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Manager = require("./Manager")


class Intern extends Manager {
    constructor(name, id, email, UCLA) {
      super(name, id, email);
      this.UCLA = UCLA;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.UCLA
    }
    
  }
  
  module.exports = Intern;