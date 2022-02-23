exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (tableBuilder) => {
    tableBuilder.increments('id');
    tableBuilder.text('username').unique().notNullable();
    tableBuilder.text('email').unique().notNullable();
    tableBuilder.timestamp('created_at').defaultTo(knex.fn.now());
    tableBuilder.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuarios');
};
