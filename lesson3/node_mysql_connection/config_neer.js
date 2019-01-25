const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'pijama',
  database: process.env.DB_NAME || 'hyf'
}

module.exports = config;
