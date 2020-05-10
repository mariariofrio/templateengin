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

    {
        type: "list",
        name: "role",
        message: "what is your role?",
        choices: ["manager", "engineer", "intern"]
    },

    {
        type: "input",
        name: "name",
        message: "what is your name?"
    },


    {
        type: "input",
        name: "ID",
        message: "what is your ID?"
    },

    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },

    {
        type: "input",
        name: "Office Number",
        message: "what is your office number",
        'when': (answers) => answers.role === 'manager'
    },

    {
        type: "input",
        name: "School",
        'when': (answers) => answers.role === 'intern',
        message: "what is your school name?"
    },

    {
        type: "input",
        name: "githubuser",
        'when': (answers) => answers.role === 'engineer',
        message: "what is your github username?"
    },

]
init()
function init() {
    getEmployeeInfo()
}
const employees = []
async function getEmployeeInfo() {
    const answer = await inquirer.prompt(questions)
    console.log(answer)
    //use the classes to create new employee objects
    switch (answer.role) {
        case "manager":
            employees.push(new Manager(answer.name, answer.ID, answer.email, answer["Office Number"]))
            break;
        case "intern":
            employees.push(new Intern(answer.name, answer.id, answer.email, answer.githubuser))
            break;
        case "engineer":
            employees.push(new Engineer(answer.name, answer.id, answer.email, answer.school))
            break;
    }
    again()
}
async function again() {
    let answer = await inquirer.prompt([{
        type: 'confirm',
        name: "again",
        message: "do you want to add another employee"
    }])
    if (answer.again) {
        getEmployeeInfo()
    } else {
        finish()
    }
}

function finish(html) {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFile(outputPath, render(employees), function (error) {
        if (error) {
            throw error;
        }
    })
}

function entiredteam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}
