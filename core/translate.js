const keywords = require('./keywords');

function translate(string) {
  /* eslint-disable */
  for(word in keywords) {
    string = string.replace(keywords[word], word);
  }
  /* eslint-enable */
  return string;
}

module.exports = translate;
