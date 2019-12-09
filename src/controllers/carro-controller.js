'use strict';

const getCarroPelaPlaca = async (req, res) => {
    const { placa } = req.params;

    return res.json({ mensagem: `Placa: ${ placa.toUpperCase() }` });
};

module.exports = {
    getCarroPelaPlaca
};