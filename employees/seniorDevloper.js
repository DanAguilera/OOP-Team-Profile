const Employee = require("./Employee");

class seniorDeveloper extends Employee {
    constructor (name, lang, email, Github) {
        super (name, lang, email);
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
