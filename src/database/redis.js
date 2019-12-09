'use strict';

const Redis = require("ioredis");
Redis.Promise = require('bluebird');

const client = new Redis({ keyrefix: 'cache:' });

const getCache = async (key) =>
    client.get(key)
          .timeout(2000)
          .then(cache => cache ? JSON.parse(cache) : null)
          .catch(err => console.log('ERROR: Timeout excedido getCache'));

const setCache = async (key, value, expireSeconds) =>
    client.set(key, JSON.stringify(value), 'EX', expireSeconds)
          .timeout(2000)
          .then(() => console.log(`${ key } adicionada no REDIS`))
          .catch(err => console.log('ERROR: Timeout excedido setCache'));

module.exports = { getCache, setCache };