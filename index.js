const fs = require("fs");
const questions = require('./questions.js');
const render = require("./MD-render.js");



questions.prompt.then((answers) => {
   const readMeContent = render.generateReadMe(answers)
 
       fs.writeFile('README.md', readMeContent, (err) =>
         err ? console.log(err) : console.log('Successfully created readme.html!')
       );
     });