//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//import all libs

const Employee = require("./lib/Employee");
let Team = [];


const writeFileAsync = util.promisify(fs.writeFile);

//Input prompts
const promptManager = () => {
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
      
      
    
    ]);
};  

function optionList() {
  inquirer.prompt([{
      type: 'list',
      name: 'Options',
      message: 'Add engineer, intern or finish building team:',
      choices: ['Engineer', 'Intern', 'Finish'],
    }])
  .then((teamChoices) => {
    console.log(teamChoices)
    if(teamChoices.options === "Engineer"){
      addEng()
    if(teamChoices.options === "Intern"){
      addIntern()
    }
    //default()
    }


    //if default call the function that takes care of generating the template and writing the file
    generateTeam();
    // if or switch condition  based teamChoices
  })
}

function addEng(){
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Add engineer, intern or finish building team:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Add engineer, intern or finish building team:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Add engineer, intern or finish building team:',
        },
        {
          type: 'input',
          name: 'name',
          message: 'Add engineer, intern or finish building team:',
          },
  
  
  ])
  console.log("addEng")
}


function addIntern(){
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Add engineer, intern or finish building team:',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Add engineer, intern or finish building team:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Add engineer, intern or finish building team:',
        },
        {
          type: 'input',
          name: 'name',
          message: 'Add engineer, intern or finish building team:',
          },
  
  
  ])
  console.log("addIntern")
}

const init = () => {
  promptManager()
  .then((answers)=> {
    //generate Manager
    let manager = new 
    //push manager to the array


  optionList()


  })
}

const generateTeam = () => {
  //pass array to the template
  //write the string to a html file using fs.writeFileSync
}



      
// const init = () => {
//   promptUser()
//     .then((answers) => {
//       //pass array to the template function so it returns a string of html content
//       writeFileAsync('./dist/index.html', new Employee(answers))
//   })
//     .then(() => console.log('Successfully wrote '))
//     .catch((err) => console.error(err));
// };
    
init();





