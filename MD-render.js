const generateReadMe = (answers) => 
`## ${answers.title}

## Tables of contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Testing](#how-to-test)
- [Questions](#questions)

## Description:
${answers.description}

## Installation:
${answers.installation}

## Usage:
${answers.usage}

## How to contribute:
${answers.contribution}

## How to test:
${answers.testing}

## Questions:

For any further questions -
Contact me: ${answers.email}
Github Profile: https://github.com/${answers.githubName}

${answers.licence}
`;


exports.generateReadMe = generateReadMe