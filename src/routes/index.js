const express = require('express');
const router = express.Router();

const { version } = require('../../package.json');
const { save, search, all } = require('../controllers/languages-controller');

router.get('/', (req, res) => res.json({
    title: "ncache working",
    version: version
}));

router.get('/languages', all);
router.get('/languages/:language', search);
router.post('/languages', save);

module.exports = router;
