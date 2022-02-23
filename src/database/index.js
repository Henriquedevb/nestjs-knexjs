import knexfile from '../../knexfile';
const knex = import('knex')(knexfile['development']);

module.exports = knex;
