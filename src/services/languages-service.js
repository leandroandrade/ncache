const { getCache, setCache } = require('../repositories/cache-repository');
const { BusinessError } = require('../commons/errors')
const {
    findByLanguage,
    saveLanguage,
    findAllLanguages,
    languageExists
} = require('../repositories/languages-repository')

exports.saveService = async ({ language, description }) => {
    if (!language || !language.length) {
        throw new BusinessError(`The 'language' is required!`, 400);
    }

    const newLanguage = language.toLowerCase();

    const exists = await languageExists({ language: newLanguage });
    if (exists) {
        throw new BusinessError(`Language ${ language } already included!`, 400);
    }

    const result = await saveLanguage({ language: newLanguage, description });
    await setCache(newLanguage, { language: newLanguage, description });

    return result;
}

exports.searchService = async ({ language }) => {
    const newLanguage = language.toLowerCase();

    const cache = await getCache(newLanguage);
    if (cache) {
        return cache;
    }

    const result = await findByLanguage({ language: newLanguage });
    if (!result) {
        throw new BusinessError(`Language ${ language } does not found!`, 400);
    }
    await setCache(newLanguage, result);

    return result;
}

exports.findAllService = async () => findAllLanguages();