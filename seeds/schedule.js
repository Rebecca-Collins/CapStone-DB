const scheduleData = require("../seed_data/schedule");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("schedule").del();
  await knex("schedule").insert(scheduleData);
};
