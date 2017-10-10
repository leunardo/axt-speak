const keywords = require('./keywords');

function translate (string) {
  for(word in keywords) {
    string = string.replace(keywords[word], word);
  }

  return string;
}

module.exports = translate;
