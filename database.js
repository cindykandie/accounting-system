const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'accounting-system',
  password: '123456',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
