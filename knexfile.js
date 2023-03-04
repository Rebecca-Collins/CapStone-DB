require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host:process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: process.env.DB_CHARSET,
    jawsdb: process.env.JAWSDB_URL,
  },
};
