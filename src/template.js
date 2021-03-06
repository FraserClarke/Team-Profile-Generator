// create the team
const generateMembers = teamArr => {

    console.log("running");

    
	console.log("template file running");

	const htmlData = [];

	//filter manager and pass to genrate manager
// 	const html = [];
//    html.push(data
//        .filter(employee => employee.getRole() === "Manager")
//        .map(manager => generateManagerHTML(manager))
//    );

	// let manager = teamArr.filter(team => team.getRole()=== "Manager");
	
 	//    htmlData.push(teamArr
	// 	.map(manager => generateManagerHTML(manager)));

		let manager = teamArr.filter(team => team.getRole()=== "Manager");
    
        htmlData.push(manager
        .map(element => generateManagerHTML(element)));
       
//        
//   );
	
	let engineer = teamArr.filter(team => team.getRole()==="Engineer");
	htmlData.push(engineer
		.map(engineer => generateEngineerHTML(engineer)));

	let intern = teamArr.filter(team => team.getRole()==="Intern");
	htmlData.push(intern
		.map(intern => generateInternHTML(intern)));
	console.log(manager);
	
	// generate Manager
	generateManagerHTML = (managerData) => { 
		return  `<div class="card col-md-auto" style="width: 18rem;">
        
        <div class="card-body manager">
            <h5 class="card-title managerName">Name: ${managerData.name}</h5>
            <p class="card-text managerRole">Role: Manager</p>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item mangerId">ID: ${managerData.id}</li>
            <li class="list-group-item managerEmail">Email: ${managerData.email}</li>
            <li class="list-group-item managerONumber">Office Number:${managerData.officeNumber} </li>
            </ul>
        
      </div> 
	   `
	   
		
		
	};
	//console.log(managerData.managerName);
// 	    htmlData.push(managerData
       
//         .map(manager => generateManagerHTML(manager))
//   );
	//gen engin etc

	for (var i = 0; i < engineer.length - 1; i++) {
		let htmlEng = generateEngineerHTML(engineer[i]);
		//push htmlEng into htmldata; .push method
		htmlData.push(htmlEng);
	// 	let engineer = teamArr.filter(team => team.getRole()==="Engineer");
	// htmlData.push(teamArr
	// 	.map(engineer => generateEngineerHTML(engineer)));

	}
	generateEngineerHTML = (EngData) => {
		return `<div class="card" style="width: 18rem;">
        
        <div class="card-body engineer">
          <h5 class="card-title engineerName">Name: ${EngData.name}</h5>
          <p class="card-text engineerRole">Role: Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item engineerId">ID: ${EngData.id} </li>
          <li class="list-group-item engineerEmail">Email: ${EngData.email} </li>
          <li class="list-group-item engineerGithub">GitHub: ${EngData.github}</li>
        </ul>
        
      </div>    
	  `
	  
	};
	//console.log(EngData);

	for (var i = 0; i < intern.length - 1; i++) {
		let htmlInt = generateInternHTML(intern[i]);
		//push htmlEng into htmldata; .push method
		htmlData.push(htmlInt);
	};

	generateInternHTML = (internData) => {
		return ` <div class="card" style="width: 18rem;">
        
        <div class="card-body intern">
          <h5 class="card-title internName">Name: ${internData.name}</h5>
          <p class="card-text internRole glyphicon glyphicon-education">Role: Intern</p>
          <!-- <span class="glyphicon glyphicon-star" aria-hidden="true"></span> -->
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item internId">ID: ${internData.id}</li>
          <li class="list-group-item internEmail">Email: ${internData.email}</li>
          <li class="list-group-item internSchool">School: ${internData.school}</li>
        </ul>
        
      </div>    
		`
		
		
	}
	

	//generate Intern

	// concatenate the teams and return the full html conent as string
	return htmlData.join();

}

// export function to generate entire page
module.exports = teamHTML => {

    return `
	    <!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <link rel="stylesheet"  href="style.css">
	    <!--Bootstrap stylesheet-->
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
	    <link rel="preconnect" href="https://fonts.gstatic.com">
	    <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap" rel="stylesheet"> 
	    <title>Team Profile Generator</title>
	</head>
	<body>
	<header class="card header text-center">
        <h1>Team Profile Generator</h1>
      </header>
	<br>
	 <div class="container">
	 <div class = "row">
		${generateMembers(teamHTML)}
	</div>
	</div>
	</body>
	</html>
    `
};