import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER || 'postgres',
<<<<<<< HEAD
      password: process.env.DB_PASSWORD || '2506',
=======
      password: process.env.DB_PASSWORD || '1234',
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
      database: process.env.DB_NAME || 'superheroedb',
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
      extension: 'ts'
    },
    seeds: {
      directory: './db/seeds',
      extension: 'ts'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};

export default config;