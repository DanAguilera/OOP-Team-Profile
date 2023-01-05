const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, lang, email, school) {
        super (name, lang, email);
        this.school = school;        
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern"
    }
}

module.exports = Intern;