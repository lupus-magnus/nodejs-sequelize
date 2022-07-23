module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.PG_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
