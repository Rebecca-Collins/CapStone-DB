exports.up = function (knex) {
  return knex.schema.createTable("schedule", (table) => {
    table.increments("id").primary();
    table.string("home_team").notNullable();
    table.string("away_team").notNullable();
    table.string("game_date").notNullable();
    table.string("game_location").notNullable();
    table.string("game_time").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("schedule");
};
