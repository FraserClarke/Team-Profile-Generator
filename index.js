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
        message: 'Welcome, press enter at any time to skip. What is your name?:',
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