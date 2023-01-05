const Employee = require("./Employee");

class SeniorDeveloper extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Senior Developer";
    }
}

module.exports = SeniorDeveloper;
