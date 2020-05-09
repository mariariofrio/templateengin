// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, OfficeNumber, UCLA, GitHubUser) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.OfficeNumber = OfficeNumber;
      this.school = UCLA,
      this.GitHubUser = GitHubUser  
    }  
    getRole(){
        return "Employee"
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getOfficeNumber(){
        return this.OfficeNumber
    }
    getGitHub(){
        return this.GitHubUser
    }
    getSchool(){
        return this.UCLA
    }
}

module.exports = Employee;