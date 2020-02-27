const Sequelize = require('sequelize');
// const databaseUrl = 'postgres://postgres:password123456789@localhost:5432/postgres';

const databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:password123456789@localhost:5432/postgres';
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error);

module.exports = db;
