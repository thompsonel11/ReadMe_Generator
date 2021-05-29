// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ### Description
  ${data.projectDescription}
  ### Project Link
  ${data.link}
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ### GitHub Username
  ${gitHub}
  ### LinkedIn URL 
  ${linkedIn}

  ## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [License](##License)
  * [collaborators](##collaborators)
  * [Tests](##Test)
  * [Questions](##Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} 

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## Collaborators
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions about this application please email: ${data.email}
  Or visit my Github profile: https://github.com/${data.username}`;
}

module.exports = generateMarkdown;
