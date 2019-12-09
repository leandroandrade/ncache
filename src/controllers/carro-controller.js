'use strict';

const carros = require('../repository/carros');

const getCarroPelaPlaca = async (req, res, next) => {
    const { placa } = req.params;

    const carro = await carros.getPelaPlaca(placa);

    if (!carro) return res
        .status(404)
        .send({ message: `Carro com placa ${ placa } nao encontrado!` });

    return res.json(carro);
};

module.exports = {
    getCarroPelaPlaca
};