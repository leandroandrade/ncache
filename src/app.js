'use strict';

const express = require('express');
require('express-async-errors');

require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ncache/', require('./routes'));

app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err);

    next(err);
});

app.use((err, req, res, next) => {
    const { status } = err;

    return res.status(status || 500).send({ error: 'Ocorreu um erro no servidor.' });
});

module.exports = app;