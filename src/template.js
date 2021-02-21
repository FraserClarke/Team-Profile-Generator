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

	console.log(manager);
	
	// generate Manager
	 gernerateMangerHTML = (managerData) => {
		return
		`<div>${data.managerName}</div>`
	}
	//gen engin etc

	for (var i = 0; i < engineer.length - 1; i++) {
		let htmlEng = generateEngineerHTML(engineer[i]);
		//push htmlEng into htmldata; .push method

	}
	generateEngineerHTML = (EngData) => {
		return
		`<div>${data.engineerName}</div>`
	}

	generateInternHTML = (internData) => {
		return
		`<div>${data.internName}</div>`
	}
	

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








