// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is your middle name?"
        }
    ])    
}

// TODO: Create a function to write README file
const writeToFile = (data) => {

}

// TODO: Create a function to initialize app
const init = async () => {

    const data = await questions();
    console.log(data);

}

// Function call to initialize app
init();


/* Create a gitignore file and type 'node_modules' on the inside. 
So you dont commit your modules to github */