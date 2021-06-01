// Source: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please provide a short description of the what, why and how of your project.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please provide a link for your project.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address here.',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well',
    },
    {
      type: 'list',
      name: 'license',
      message: 'A high-quality README file contains a license. This lets other developers know what they can and cannot do with your project. Please select a license from the list:',
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open", "No License"],
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
]

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        console.log('fileName:', fileName)
        console.log('data:', data)
        if (error) {
            return console.log(error)
        }
    }
    )}

// Create function to initialize program 
function init (){
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
    }
    )
}

init();
