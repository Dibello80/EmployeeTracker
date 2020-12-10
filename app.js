var cli = require("./public/initialize.js")

const logo = require('asciiart-logo');
 

console.log(
    logo({
        name: 'Employee Tracker',
        font: 'ANSI Shadow',
        lineChars: 25,
        padding: 2,
        margin: 3,
        borderColor: 'blue',
        logoColor: 'bold-yellow',
        textColor: 'yellow',
    })
    .emptyLine()
    .right("Dibello80 v1.0")
    .render()
);
