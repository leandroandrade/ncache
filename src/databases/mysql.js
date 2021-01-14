const mysql = require('mysql2/promise');

module.exports = {
    async connect() {
        const pool = await mysql.createPool({
            user: 'root',
            password: 'password',
            database: 'dblanguages',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        pool.query('create table IF NOT EXISTS languages(id int not null auto_increment primary key, language varchar(20), description varchar(45));');

        this.conn = pool;
    },

    disconnect() {
        this.conn.end()
    },

    connection() {
        return this.conn;
    }
}
