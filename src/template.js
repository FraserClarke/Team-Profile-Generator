//module.imports = "/index.js"
const teamHTML =  {

	//filter manager and pass to genrate manager
// 	const html = [];
//    html.push(data
//        .filter(employee => employee.getRole() === "Manager")
//        .map(manager => generateManagerHTML(manager))
//    );
	
	// generate Manager
	 gernerateMangerHTML: (data) => {
		return
		`<div>${data.managerName}</div>`
	},
	//gen engin etc

	generateEngineerHTML: (data) => {
		return
		`<div>${data.engineerName}</div>`
	},

	generateInternHTML: (data) => {
		return
		`<div>${data.internName}</div>`
	},

	
	

	//generate Intern

	// concatenate the teams and return the full html conent as string

}
//module.exports = gernerateMangerHTML
module.exports = teamHTML