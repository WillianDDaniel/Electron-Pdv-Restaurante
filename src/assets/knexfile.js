export default {
    // Suas configurações do knex aqui
    client: 'sqlite3',
    connection: {
        filename: 'C:/Users/Willian Daniel/Documents/CURSO_JAVASCRIPT/teste/electron-app/src/db/data/mydb.sqlite',
        flags: ['OPEN_URI', 'OPEN_SHAREDCACHE']
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  };
  