'use strict';

const Redis = require("ioredis");
Redis.Promise = require('bluebird');

const client = new Redis({ keyrefix: 'cache:' });

const getCache = async (key) =>
    client.get(key)
          .timeout(process.env.REDIS_REQUEST_TIMEOUT_MILLISECONDS)
          .then(cache => cache ? (console.log(`REDIS: dados obtido do cache!`), JSON.parse(cache)) : null)
          .catch(err => console.log('ERROR_REDIS: Timeout excedido getCache'));

const setCache = async (key, value, expireSeconds) =>
    client.set(key, JSON.stringify(value), 'EX', expireSeconds)
          .timeout(process.env.REDIS_REQUEST_TIMEOUT_MILLISECONDS)
          .then(() => console.log(`REDIS: key ${ key } adicionada!`))
          .catch(err => console.log('ERROR_REDIS: Timeout excedido setCache'));

module.exports = { getCache, setCache };