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
        logoColor: 'black',
        textColor: 'green',
    })
    .emptyLine()
    .right("Dibello80 v1.0")
    .render()
);
