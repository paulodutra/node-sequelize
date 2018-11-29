const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//inst de express para start do server
const app = express();

app.use(morgan('dev'));

app.use(cors());

//convert os dados recebidos em json 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
require('./src/models/index')(process.env.NODE_ENV)
require('./src/index')(app);

app.listen(9000, () => console.log( 'express started at localhost: 9000'))

