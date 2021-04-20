module.exports = {
  development: {
    database: {
      rest: {
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRPOSTGRES_PORTES_DB,
        dialect: "postgres",
      },
    },
  },
  production: {
    database: {
      rest: {
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRPOSTGRES_PORTES_DB,
        dialect: "postgres",
      },
    },
  },
};
