// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ("https://img.shields.io/github/license/JCyberAI/readMeGen");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ("https://img.shields.io/npm/l/inquirer?style=flat-square");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ("");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # title 
  ${data.name}
  # tool
  ${data.tool}
  # message
  ${data.time}

 `
}

module.exports = generateMarkdown;
