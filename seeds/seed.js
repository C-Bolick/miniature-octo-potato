const sequelize = require('../config/connection');
const seedLocations = require('./locationSeedData');
const seedCats = require('./catSeedData');
const seedDogs = require('./dogSeedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocations();

  await seedCats();

  await seedDogs();

  process.exit(0);
};

seedAll();
