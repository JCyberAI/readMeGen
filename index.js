// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            title: "name",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            title: "tool",
            message: "What tool is being used to make this command-line app?"
        },
        {
          type: "input",
          title: "time",
          message: "How long did it take me to make this command-line app?"
        }
    ])    
}

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return `<!Doctype html>
    <html lang="en">
      <head>
    
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
        <title>Home</title>
      </head>
      <body>
        <div class="container">
            
    
      </body>
    </html>`
}

// TODO: Create a function to initialize app

const init = async () => {

    const md = writeToFile(await questions());

}

// Function call to initialize app
init();


/* Create a gitignore file and type 'node_modules' on the inside. 
So you dont commit your modules to github */