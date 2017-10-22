const express = require('express');

const bodyParser = require('body-parser');
const translate = require('./translate');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/translate', translate);

app.listen(process.env.PORT || 11111, () => console.log('Voou mlk'));
