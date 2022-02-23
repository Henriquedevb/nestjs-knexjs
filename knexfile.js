module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'users',
      user: 'postgres',
      password: 'henrique',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'users_migrations',
      directory: __dirname + '/src/database/migrations',
    },
    seeds: {
      directory: __dirname + '/src/database/seeds',
    },
  },
};
