// Source: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('INSERT MARKDOWN FILE PATH')

const questions = [{
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please provide a short description the what, why and how of your project.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please provide a link for your project.',
    },
    {
      type: 'input',
      name: 'gitHubUserName',
      message: 'what is your GitHub username?',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'SEE GITHUB ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
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
      type: 'input',
      name: 'license',
      message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Badges arent necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what youre doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.'
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if youd prefer.',
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
