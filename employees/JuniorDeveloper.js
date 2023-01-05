const Employee = require("./Employee");


class juniorDeveloper extends Employee {
    constructor (name, lang, email, github) {
        super (name, lang, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Junior Developer";
    }

}

module.exports = juniorDeveloper;