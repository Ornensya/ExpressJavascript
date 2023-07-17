const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_ecommerce',
    password: 'ornen123',
    port: '5432',
});

module.exports = pool;