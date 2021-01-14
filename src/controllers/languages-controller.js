const { searchService, saveService, findAllService } = require('../services/languages-service');

exports.save = async (req, res, next) => {
    const { language, description } = req.body;

    const result = await saveService({ language, description });
    return res.status(201).send(result)
}

exports.search = async (req, res, next) => {
    const { language } = req.params;

    const result = await searchService({ language });
    return res.json(result)
}

exports.all = async (req, res, next) => {
    const result = await findAllService();
    return res.json({ result });
}
