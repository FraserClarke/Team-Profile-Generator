const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //do super before this
        this.officeNumber = officeNumber;
        
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    //getrole string manager
    getRole() {
        return "Manager";
    }
    
}

module.exports = Manager