exports.up = function (knex) {
  return knex.schema.createTable("players", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("age").notNullable();
    table.string("height").notNullable();
    table.string("jersey");
    table.string("description");
    table.string("position").notNullable();
    table.string("img").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
