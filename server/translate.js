const router = require('express').Router();
const translateSentence = require('../core/translate');

function post(req, res) {
  const words = req.body.message;

  try {
    const translated = translateSentence(words);
    res.send({ data: translated });
  } catch (error) {
    res.set({
      "Content-Type": "application/json"
    })
    res.status(500).send({ error: error.message });
  }
}

function options(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
}

router
  .route('/')
  .options(options)
  .post(post);

module.exports = router;
