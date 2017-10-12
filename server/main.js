const express = require('express');
const bodyParser = require('body-parser');
const translate = require('./translate');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/translate', translate);

app.listen(process.env.PORT || 11111, () => console.log('Voou mlk'));
