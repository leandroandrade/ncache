const { MySQL } = require('../databases');

exports.findByLanguage = async ({ language }) => {
    const [data] = await MySQL.connection().query({
        sql: 'SELECT * FROM languages WHERE language = ?',
    }, language);

    console.log('MYSQL: data fom DB!')

    return data[0];
};

exports.languageExists = async ({ language }) => {
    const [data] = await MySQL.connection().query({
        sql: 'SELECT COUNT(*) AS total FROM languages WHERE language = ?',
    }, language);

    return +data[0].total > 0;
}

exports.saveLanguage = async ({ language, description }) => {
    const result = await MySQL.connection().query(
        'INSERT INTO languages (language, description) values(?,?)', [
            language, description
        ]);

    const { insertId } = result[0];
    return { id: insertId, language, description };
}

exports.findAllLanguages = async () => {
    const [data] = await MySQL.connection().query({
        sql: 'SELECT * FROM languages',
    });
    return data;
}
