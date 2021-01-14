require('dotenv').config();

const { MySQL, Redis } = require('./databases');

Promise.all([MySQL.connect(), Redis.connect()]).then(() => {
    const app = require('./app');
    app.listen(3000, () => console.log('Server started'));
});
