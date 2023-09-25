const Location = require('./Location.js');
const Cat = require('./Cat.js');
const Dog = require('./Dog.js');

Location.hasMany(Cat, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Location.hasMany(Dog, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
  });

Cat.belongsTo(Location, {
  foreignKey: 'location_id',
});

Dog.belongsTo(Location, {
  foreignKey: 'location_id',
});

module.exports = { Location, Cat, Dog };
