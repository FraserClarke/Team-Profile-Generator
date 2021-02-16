//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//import all libs
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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
        message: 'Enter Managers employee ID:',
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
    if(teamChoices.Options === "Engineer"){
      addEng()
    if(teamChoices.Options === "Intern"){
      addIntern()
    }
    //if(default) generateTeam
    //default(generateTeam)
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
    message: 'Enter engineers name:',
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter engineers ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Add engineers email adress:',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Add engineers Github Username:',
          },
          
  
  ])
  console.log("addEng")
  //.then(optionList);
  //.then(optionList());
}


function addIntern(){
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Add interns name:',
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Add interns ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Add interns email:',
        },
        {
          type: 'input',
          name: 'school',
          message: 'Add interns school:',
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





