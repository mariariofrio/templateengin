const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const questions = [

   { type: "list",
    name: "role",
    message: "what is your role?",
    choices: ["manager", "engineer", "intern"]},

   { type: "input",
    name: "name",
    message: "what is your name?"},


   { type: "input",
    name: "ID",
    message: "what is your ID?"},

   { type: "input",
    name: "email",
    message: "what is your email?"},

   { type: "input",
    name: "Office Number",
    message: "what is your office number",
    'when': (answers) => answers.role === 'manager'},
    
    { type: "input",
    name: "School",
    'when': (answers) => answers.role === 'intern',
    message: "what is your school name?"},
    
    { type: "input",
    name: "githubuser",
    'when': (answers) => answers.role === 'engineer',
    message: "what is your github username?"},

]
init()
function init(){
    getEmployeeInfo()
}
const employees=[]
async function getEmployeeInfo(){
    const answer= await inquirer.prompt(questions)
    console.log(answer)
    //use the classes to create new employee objects
    switch (answer.role) {
        case "manager":
            employees.push(new Manager (answer.name,answer.ID,answer.email,answer["Office Number"]))
            break;
        case "intern":
            employees.push(new Intern (answer.name,answer.id,answer.email,answer.githubuser))
            break;
        case "engineer":
            employees.push(new Engineer (answer.name,answer.id,answer.email,answer.school))
            break;
    }
    again()
}
async function again(){
    let answer= await inquirer.prompt([{
        type:'confirm',
        name: "again",
        message: "do you want to add another employee"
    }])
    if(answer.again){
        getEmployeeInfo()
    }else{
        finish()
    }
}
function finish(){
    console.log(employees)
    process.exit("0")
    // pass employeed to html render
    
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```