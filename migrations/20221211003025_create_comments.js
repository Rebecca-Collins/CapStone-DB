
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
      table.uuid('id').primary();
      table.string('first_name').notNullable();
      table.string('content').notNullable();
      table.timestamp('created_at').notNullable();
    })
  };
  
  
  exports.down = function(knex) {
      return knex.schema.dropTable('comments');
  };
  
