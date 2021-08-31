const pug = require('pug');
const compiledFunction = pug.compileFile('index.pug');
console.log(compiledFunction({}));