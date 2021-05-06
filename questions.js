const inquirer = require('inquirer');


const prompt = inquirer.prompt([
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
        default: 'npm i',
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
        default: 'npm test',
      },
      {
        type: 'list',
        name: 'licence',
        message: 'What licence would you like to use?',
        choices: [{name: 'MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}, {name: 'BSD 3-Clause', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'}, {name: 'apache-2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'}]
      },
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
    ])
 
  exports.prompt = prompt
