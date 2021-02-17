const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) //do super before this
        this.officeNumber = officeNumber
        
    }
    officeNumber() {
        return this.github;
    }
    //getrole string manager
    getRole() {
        return "Manager";
    }
    
}

module.exports = Manager