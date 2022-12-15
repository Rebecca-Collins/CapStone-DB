const playersData = require("../seed_data/players");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("players").del();
  await knex("players").insert(playersData);
};
