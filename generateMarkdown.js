// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license, "from badge function")
    if (license !== "No License") {
     return `![](https://img.shields.io/badge/License-${license}-blue.svg)`;    
    }
     return ""; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "No License") {
     return `*[License](## License)`
   }
   return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License

    This project is licensed under the ${license} license`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  return `# ${data.projectName}
    ${renderLicenseBadge(data.license)}
  ### Description
  ${data.projectDescription}

  ### Project Link
  ${data.link}

  ## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
   ${renderLicenseLink(data.license)}
  * [Collaborators](##contributing)
  * [Tests](##Test)
  * [Questions](##Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Contributing
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions about this application please email: ${data.email}
  Or visit my Github profile: https://github.com/${data.gitHub}
  
  ${renderLicenseSection(data.license)}`

  
}

module.exports = generateMarkdown;
