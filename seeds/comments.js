const commentData = require("../seed_data/comments_data");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("comments").insert(commentData);
};
