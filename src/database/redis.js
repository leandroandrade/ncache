'use strict';

const Redis = require("ioredis");
Redis.Promise = require('bluebird');

const client = new Redis({ keyrefix: 'cache:' });

const getCache = async (key) =>
    client.get(key)
          .timeout(2000)
          .then(cache => cache ? JSON.parse(cache) : null)
          .catch(err => console.log('> Timeout excedido getCache'));

const setCache = async (key, value, expireSeconds) =>
    client.set(key, JSON.stringify(value), 'EX', expireSeconds)
          .timeout(2000)
          .then(() => console.log(`${ key } adicionada no REDIS`))
          .catch(err => console.log('> Timeout excedido setCache'));


// const getCache = async (key) => {
//     try {
//         const cached = await client.get(key).timeout(2000);
//
//         return cached ? JSON.parse(cached) : null;
//     } catch (err) {
//         console.log('> Timeout excedido getCache');
//
//         return null;
//     }
// };

// const setCache = async (key, value, expireSeconds) => {
//     try {
//         await client.set(key, JSON.stringify(value), 'EX', expireSeconds).timeout(2000);
//
//         console.log(`${ key } adicionada no REDIS`);
//     } catch (err) {
//         console.log('> Timeout excedido setCache');
//
//         return null;
//     }
// };

module.exports = { getCache, setCache };