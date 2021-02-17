//module.imports = "/index.js"
const teamHTML =  {

	//filter manager and pass to genrate manager
	
	
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

	
	// function generateMarkdown(data) {
	// 	console.log(data);
	
	//   return `# ${data.title}
	
	//   ${renderLicenseBadge(data.license)}
	// generate Eng

	//generate Intern

	// concatenate the teams and return the full html conent as string

}
//module.exports = gernerateMangerHTML
module.exports = teamHTML