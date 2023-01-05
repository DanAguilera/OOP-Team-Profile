const seniorDev = require("./employees/SeniorDeveloper");
const juniorDev = require("./employees/JuniorDeveloper");
const Intern = require("./employees/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = path.join("team.html");
const generateTeam = require("./template")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Which type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Senior Developer", "Junior Developer", "Intern", "No more team members left to add to Site"]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Senior Developer":
          addSeniorDeveloper();
          break;
        case "Junior Developer":
          addJuniorDeveloper();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }

function addSeniorDeveloper() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "seniorDeveloperName",
      message: "What is the Senior Developer's name?"
    },

    {
      type: "input",
      name: "seniorDeveloperId",
      message: "What is the Senior Developer's employee ID number?"
    },

    {
      type: "input",
      name: "seniorDeveloperEmail",
      message: "What is the Senior Developer's email address?"
    },

    {
      type: "input",
      name: "seniorDeveloperGithub",
      message: "What is the Senior Developer's Github?"
    }

  ]).then(answers => {
    const seniorDeveloper = new seniorDeveloper(answers.seniorDeveloperName, answers.seniorDeveloperId, answers.seniorDeveloperEmail, answers.seniorDeveloperGithub);
    teamArray.push(seniorDeveloper);
    createTeam();
  });

}


function addJuniorDeveloper() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "JuniorDeveloperName",
        message: "What is the JuniorDeveloper's name?"
      },

      {
        type: "input",
        name: "JuniorDeveloperId",
        message: "What is the JuniorDeveloper's employee ID number?" 
      },

      {
        type: "input",
        name: "JuniorDeveloperEmail",
        message: "What is the JuniorDeveloper's email address?"
      },

      {
        type: "input",
        name: "JuniorDeveloperGithub",
        message: "What is the JuniorDeveloper's GitHub?"
      }

    ]).then(answers => {
      const juniorDeveloper = new juniorDeveloper(answers.juniorDeveloperName, answers.juniorDeveloperId, answers.juniorDeveloperEmail, answers.juniorDeveloperGithub);
      teamArray.push(juniorDeveloper);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }


function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();