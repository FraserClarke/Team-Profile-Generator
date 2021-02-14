//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Employee = require("./lib/Employee");


const writeFileAsync = util.promisify(fs.writeFile);

//Input prompts
const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Welcome, press enter at any time to skip. Enter Team managers name:',
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee ID:',
      },
      {
        type: 'input',
        name: 'emailAdress',
        message: 'Enter Email address:',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Welcome, press enter at any time to skip. What is your name?:',
      },
      {
        type: 'list',
        name: 'Options',
        message: 'Add engineer, intern or finish building team:',
        choices: ['Engineer', 'Intern', 'Finish'],
        },

    
    ]);
};  
      
      const init = () => {
        promptUser()
          .then((answers) => writeFileAsync('./dist/index.html', new Employee(answers)))
          .then(() => console.log('Successfully wrote '))
          .catch((err) => console.error(err));
      };
    
    init();