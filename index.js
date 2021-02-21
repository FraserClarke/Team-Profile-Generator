//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//import all libs
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamBuilder = require("./src/template.js");

let Team = [];

const writeFileAsync = util.promisify(fs.writeFile);

//Input prompts
const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message:
        "Welcome, press enter at any time to skip. Enter Team managers name:",
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter Managers employee ID:",
    },
    {
      type: "input",
      name: "emailAdress",
      message: "Enter Email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter office number:",
    },
  ]);
};

function optionList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Options",
        message: "Add engineer, intern or finish building team:",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((teamChoices) => {
      // console.log(teamChoices);
      switch (teamChoices.Options) {
        case "Engineer":
          addEng();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          generateTeam();
      }
      // if (teamChoices.Options === "Engineer") {
      //   addEng();
      // } else if (teamChoices.Options === "Intern") {
      //   addIntern();
      // } else {
      //   generateTeam();
      // }
      //default(generateTeam)

      // switch (new Date().getDay()) {
      //   case 6:
      //     text = "Today is Saturday";
      //     break;
      //   case 0:
      //     text = "Today is Sunday";
      //     break;
      //   default:
      //     text = "Looking forward to the Weekend";
      // }

      //if default call the function that takes care of generating the template and writing the file
      // if or switch condition  based teamChoices
    });
}

function addEng() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "Enter engineers name:",
      },
      {
        type: "input",
        name: "engId",
        message: "Enter engineers ID:",
      },
      {
        type: "input",
        name: "engEmail",
        message: "Add engineers email adress:",
      },
      {
        type: "input",
        name: "engGithub",
        message: "Add engineers Github Username:",
      },
    ])
    //console.log("addEng")
    //.then(optionList);
    //.then(optionList());
    .then((answers) => {
      const engineer = new Engineer(
        answers.engName,  ///CHANGE TO ENIGINEER DATA SAME AS MANGE BELOW EG TEAM.PUSH etc
        answers.engId,
        answers.engEmail,
        answers.engGithub
      );
      // Store new engineer in team array here
      // Call on optionList() again. 
      Team.push(engineer);

      optionList();
    });
}

function addIntern() {
  // console.log("addIntern");
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Add interns name:",
      },
      {
        type: "input",
        name: "internId",
        message: "Add interns ID:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Add interns email:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Add interns school:",
      },
      

    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,  ///CHANGE TO ENIGINEER DATA SAME AS MANGE BELOW EG TEAM.PUSH etc
        answers.internId,
        answers.internEmail,
        answers.internSchool,
      );
      // Store new engineer in team array here
      // Call on optionList() again. 
      Team.push(intern);

      optionList();
    });

    //.then(optionList);
}

const init = () => {
  promptManager().then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.employeeId,
      answers.emailAdress,
      answers.officeNumber
    );

    // console.log("Manager");
    //console.log(answers);
    //generate Manager
    //  let manager = new manager
    //push manager to the array
    Team.push(manager);

    optionList();
  });
};

teamBuilder(Team);

const generateTeam = () => {
  console.log("yo----",Team);
  let team = teamBuilder(Team);

// fs.writeFileSync("Output/team.html", team, "utf-8")
};

init();

  //pass array to the template

  // TEAM is a global array, at this point we know what team members we have .
  //teamHTML = test;
  // initilialise a string which is the HTML string. 
  // Iterate through each team meber in TEAM:
  //   Get their role bycalling their getRole method.
  //   Depending on their role, call the appropriate generateHtml function, appendto HTML string . 
  //Team.forEach(getRole)
  //teamHTML.gernerateMangerHTML;
  //let test = 
 // the variable would be a combination of usingthe _dirname and path.join to create a file path that will 
 //act as where you will be creating then sending this new info that is being generated.
  //fs.writeFileSync('./dist/index.html, test');
  //((answers) => writeFilesync('./dist/index.html, teamHTML.generateallhtml(answers)))


  //WRITEFILE
  // fs.writeFileSync(outputPath, renderHTML(array), "utf-8");
  // OR
  // fs.writeFileSync(outputPath, variable, "utf-8");
  // var variable = renderHTML(array)


// fs.writeFileSync( file, data, options )
// 4:30
// another way to put it, is
// (a destination, what will be written, and extra stuff like font)


//write the string to a html file using fs.writeFileSync
  //egin ///create variables
  //inter
  //call function to gernate all based on above string
  //teamhtml.generateAllhtml(answers))) //output goes into fs.writefile
  //writefile
  //teamhtml.generateallhtml(answers))) //answers are the variables above
  //fs.writeFileSync('./template.js')



// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('./html', teamhtml.generateallhtml(answers)))
//     .then(() => console.log('Successfully wrote to readme.md'))
//     .catch((err) => console.error(err));
// };

// const init = () => {
//   promptUser()
//     .then((answers) => {
//       //pass array to the template function so it returns a string of html content
//       writeFileAsync('./dist/index.html', new Employee(answers))
//   })
//     .then(() => console.log('Successfully wrote '))
//     .catch((err) => console.error(err));
// };


