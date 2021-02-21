//module.imports = "/index.js"
const teamHTML = (teamArr) => {

	console.log("template file running");

	const htmlData = [];

	//filter manager and pass to genrate manager
// 	const html = [];
//    html.push(data
//        .filter(employee => employee.getRole() === "Manager")
//        .map(manager => generateManagerHTML(manager))
//    );

	let manager = teamArr.filter(team => team.getRole()=== "Manager");

	let engineer = teamArr.filter(team => team.getRole()==="Engineer");

	let intern = teamArr.filter(team => team.getRole()==="Intern");

	console.log(manager);
	
	// generate Manager
	 gernerateMangerHTML = (managerData) => {
		return
		`<div class="card" style="width: 18rem;">
        
        <div class="card-body manager">
            <h5 class="card-title managerName">Name:${data.managerName} </h5>
            <p class="card-text managerRole">Role: Manager</p>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item mangerId">ID: ${data.employeeId}</li>
            <li class="list-group-item managerEmail">Email: ${data.emailAdress}</li>
            <li class="list-group-item managerONumber">Office Number:${data.officeNumber} </li>
            </ul>
        
      </div> 
	   `

		
	};
	//gen engin etc

	for (var i = 0; i < engineer.length - 1; i++) {
		let htmlEng = generateEngineerHTML(engineer[i]);
		//push htmlEng into htmldata; .push method
		htmlEng.push(htmlData);

	};
	generateEngineerHTML = (EngData) => {
		return
		`<div class="card" style="width: 18rem;">
        
        <div class="card-body engineer">
          <h5 class="card-title engineerName">Name: ${data.engName}</h5>
          <p class="card-text engineerRole">Role: Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item engineerId">ID: ${data.engId} </li>
          <li class="list-group-item engineerEmail">Email: ${data.engEmail} </li>
          <li class="list-group-item engineerGithub">GitHub: ${data.engGithub}</li>
        </ul>
        
      </div>    
	  `
		
	};

	for (var i = 0; i < intern.length - 1; i++) {
		let htmlInt = generateEngineerHTML(engineer[i]);
		//push htmlEng into htmldata; .push method
		htmlInt.push(htmlData);
	};

	generateInternHTML = (internData) => {
		return
		` <div class="card" style="width: 18rem;">
        
        <div class="card-body intern">
          <h5 class="card-title internName">Name: ${data.internName}</h5>
          <p class="card-text internRole glyphicon glyphicon-education">Role: Intern</p>
          <!-- <span class="glyphicon glyphicon-star" aria-hidden="true"></span> -->
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item internId">ID: ${data.internId}</li>
          <li class="list-group-item internEmail">Email: ${data.internEmail}</li>
          <li class="list-group-item internSchool">School: ${data.internSchool}</li>
        </ul>
        
      </div>    
`
		
		`<div>${data.internName}</div>`
	};
	

	//generate Intern

	// concatenate the teams and return the full html conent as string
	return htmlData.join("");
}
//module.exports = gernerateMangerHTML
module.exports = teamHTMLArray => {
	return 
	`
	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="Assets/style.css">
    <!--Bootstrap stylesheet-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap" rel="stylesheet"> 
    <title>About</title>
</head>
<body>

<div>
	${teamHTML(teamHTMLArray)}
</div>

</body>
</html>
	`;
}








