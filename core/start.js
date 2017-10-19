const translate = require('./translate');

const translatedString = translate(process.argv[2]);

console.log(translatedString);
