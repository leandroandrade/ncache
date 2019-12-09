'use strict';

const mysql = require('promise-mysql');

const getConnection = () => mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'dbcarros',
    returnArgumentsArray: true
});

const closeConnection = connection => {
    if (connection) connection.end();
};

module.exports = { getConnection, closeConnection };