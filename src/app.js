const express = require('express');
require('express-async-errors');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ncache/', require('./routes'));

app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err);

    next(err);
});

app.use((err, req, res, next) => {
    const { status, message } = err;

    return res.status(status || 500).send({ error: status ? message : 'Internal Server Error!' });
});

module.exports = app;
