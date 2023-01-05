const Employee = require("./Employee");


class JuniorDeveloper extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Junior Developer";
    }

}

module.exports = JuniorDeveloper;