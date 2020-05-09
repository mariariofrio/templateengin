// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Manager = require("./Manager")


class Engineer extends Manager {
    constructor(name, id, email, GitHubUser) {
      super(name, id, email);
      this.GitHubUser = GitHubUser;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.GitHubUser
    }
    
  }
  
  module.exports = Engineer;
