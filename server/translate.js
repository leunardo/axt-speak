const router = require('express').Router();
const translateSentence = require('../core/translate');

router
    .route('/')
        .post(post);

function post(req, res) {
    console.log(req.body);
    let words = req.body.message;

    try {   
        let translated = translateSentence(words);
        res.send({ "data": translated });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }    
}

module.exports = router;