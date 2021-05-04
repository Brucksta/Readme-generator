const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const { info } = require('console');

const generateReadMe = (answers) =>
`${answers.title}

Description:
${answers.description}

Installation:
${answers.installation}

Usage:
${answers.usage}

How to contribute:
${answers.contribution}

How to test:
${answers.testing}

Github link: https://github.com/${githubName}
Contact info: ${answers.email}
`;

inquirer.prompt([
      {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
      },
      {
        type: 'input',
        name: 'title',  
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installing your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How do people contribute to your project?',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'How can people test your application?',
      },
    ])
    .then((answers) => {
   const readMeContent = generateReadMe(answers);

      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });

