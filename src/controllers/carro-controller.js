'use strict';

const carros = require('../repository/carros');
const { getCache, setCache } = require('../database/redis');

const expireSeconds = 30;
const key = placa => `carros:${ placa }`;

const getCarroPelaPlaca = async (req, res, next) => {
    const { placa } = req.params;

    const keyPlaca = key(placa);

    const cached = await getCache(keyPlaca);
    if (cached) return res.json(cached);

    const carro = await carros.getPelaPlaca(placa);
    if (!carro) return res
        .status(404)
        .send({ message: `Carro com placa ${ placa } nao encontrado!` });

    await setCache(keyPlaca, carro, expireSeconds);

    return res.json(carro);
};

module.exports = {
    getCarroPelaPlaca
};