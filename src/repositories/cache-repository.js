const { Redis } = require('../databases');

const getKey = ({ key }) => `languages:${ key }`;

exports.getCache = async (key) => {
    const newKey = getKey({ key });
    return Redis.client().get(newKey)
        .timeout(process.env.REDIS_REQUEST_TIMEOUT_MILLISECONDS)
        .then(cache => cache ? (console.log(`REDIS: data from cache!`), JSON.parse(cache)) : null)
        .catch(err => console.log('ERROR_REDIS: Timeout exceeded!'));
}

exports.setCache = async (key, value) => {
    const newKey = getKey({ key });
    Redis.client().set(newKey, JSON.stringify(value), 'EX', process.env.REDIS_EXPIRE_CACHE_SECONDS)
        .timeout(process.env.REDIS_REQUEST_TIMEOUT_MILLISECONDS)
        .then(() => console.log(`REDIS: key ${ key } set cache!`))
        .catch(err => console.log('ERROR_REDIS: Timeout exceeded'));
}
