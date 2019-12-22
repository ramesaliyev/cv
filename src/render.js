const fs = require('fs');
const path = require("path");
const pug = require('pug');
const data = require('./data.json');

// Compile the source code
const compiledFunction = pug.compileFile(__dirname + '/cv.pug');
const html = compiledFunction(data);

fs.writeFileSync(path.join(__dirname + '/../index.html'), html);
