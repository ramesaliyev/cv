const fs = require('fs');
const path = require("path");
const pug = require('pug');
const data = require('./data.json');
const pdf = require('html-pdf');

// Compile the source code
const compiledFunction = pug.compileFile(__dirname + '/cv.pug');
const html = compiledFunction(data);

fs.writeFileSync(path.join(__dirname + '/../index.html'), html);

pdf
  .create(html, {})
  .toFile(path.join(__dirname + '/../dist/cv.pdf'),
    (err, res) => {
      if (err) {
        return console.log(err);
      }

    console.log(res);
  }
);