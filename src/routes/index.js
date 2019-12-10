'use strict';

const express = require('express');
const router = express.Router();

const { version } = require('../../package.json');

const { getCarroPelaPlaca } = require('../controllers/carros-controller');

router.get('/', (req, res) => res.json({
    title: "ncache working",
    version: version
}));

router.get('/carros/:placa', getCarroPelaPlaca);


module.exports = router;