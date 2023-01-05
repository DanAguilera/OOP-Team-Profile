const Employee = require("./Employee");

class seniorDeveloper extends Employee {
    constructor (name, id, email, Github) {
        super (name, id, email);
        this.Github = Github;
    }

    getGithub() {
        return this.Github;
    }

    getRole() {
        return "Senior Developer";
    }
}

module.exports = seniorDeveloper;
