const admin = require("../seed_data/admin");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert(admin);
};
