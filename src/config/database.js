module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postegres',
  password: 'DOCKER',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
