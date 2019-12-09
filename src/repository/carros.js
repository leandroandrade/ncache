'use strict';

const { getConnection, closeConnection } = require('../database/mysql');

exports.getPelaPlaca = async placa => {
    const connection = await getConnection();

    const [data] = await connection.query({
        sql: 'SELECT * FROM carros WHERE placa = ?',
        timeout: 40000, // 40s
    }, placa);

    closeConnection(connection);

    return data[0];
};