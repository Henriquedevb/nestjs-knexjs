exports.seed = async function (knex) {
  await knex('usuarios').del();
  await knex('usuarios').insert([
    { id: 1, username: 'username1', email: 'teste1@seed.com' },
    { id: 2, username: 'username2', email: 'teste2@seed.com' },
    { id: 3, username: 'username3', email: 'teste3@seed.com' },
  ]);
};
