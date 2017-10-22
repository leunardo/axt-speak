const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const translate = require('./translate');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/translate', translate);

app.listen(process.env.PORT || 11111, () => console.log('Voou mlk'));
