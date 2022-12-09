/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('schedule', (table) =>{
        table.uuid('id').primary();
        table.string('home_game').notNullable();
        table.string('away_game').notNullable();
        table.string('date').notNullable();
        table.string('location').notNullable();
        table.string('time').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
