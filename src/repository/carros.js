'use strict';

const { getConnection, closeConnection } = require('../database/mysql');

exports.getPelaPlaca = async placa => {
    const connection = await getConnection();

    console.log(`MYSQL: pesquisando placa ${ placa }`);

    const [data] = await connection.query({
        sql: 'SELECT * FROM carros WHERE placa = ?',
        timeout: 40000, // 40s
    }, placa);

    console.log(`MYSQL: placa ${ placa } retornada do banco de dados!`);

    closeConnection(connection);

    return data[0];
};