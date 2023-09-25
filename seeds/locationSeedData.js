const { Gallery } = require('../models'); 

const locationData = [
    {
      "name": "Furever Home Southern Pines",
      "city": "Southern Pines",
      "state": "North Carolina",
      "opening_time": "10:00:00",
      "closing_time": "17:00:00"
    },
    {
      "name": "Furever Home Fayetteville",
      "city": "Fayetteville",
      "state": "North Carolina",
      "opening_time": "10:00:00",
      "closing_time": "18:00:00"
    },
    {
      "name": "Furever Home Raleigh",
      "city": "Raleigh",
      "state": "North Carolina",
      "opening_time": "10:00:00",
      "closing_time": "18:00:00"
    },
  ];
  
const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;