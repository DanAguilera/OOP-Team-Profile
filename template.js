// create the team
const generateTeam = team => {

    // create the SeniorDeveloper html
    const generateSeniorDeveloper = SeniorDeveloper => {
        return `
<div id="card-header" class="card employee-card">
    <div class="card-header  text-white">
        <h2 class="card-title">${SeniorDeveloper.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${SeniorDeveloper.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${SeniorDeveloper.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${SeniorDeveloper.getEmail()}">${SeniorDeveloper.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${SeniorDeveloper.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for JuniorDevelopers
    const generateJuniorDeveloper = JuniorDeveloper => {
        return `
<div id="card-header" class="card employee-card">
    <div class="card-header text-white">
        <h2 class="card-title">${JuniorDeveloper.getName()}</h2>
        <h3 class="card-title"></i>${JuniorDeveloper.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${JuniorDeveloper.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${JuniorDeveloper.getEmail()}">${JuniorDeveloper.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${JuniorDeveloper.getGithub()}" target="_blank" rel="noopener noreferrer">${JuniorDeveloper.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
<div id="card-header" class="card employee-card">
    <div class="card-header text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "SeniorDeveloper")
        .map(SeniorDeveloper => generateSeniorDeveloper(SeniorDeveloper))
    );
    html.push(team
        .filter(employee => employee.getRole() === "JuniorDeveloper")
        .map(JuniorDeveloper => generateJuniorDeveloper(JuniorDeveloper))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Start-Up</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};