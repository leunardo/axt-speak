const router = require('express').Router();
const translateSentence = require('../core/translate');

function post(req, res) {
  const words = req.body.message;

  try {
    const translated = translateSentence(words);
    res.send({ data: translated });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

router
  .route('/')
  .post(post);

module.exports = router;
