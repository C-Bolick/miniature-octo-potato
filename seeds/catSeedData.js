const { Cat } = require('../models');

const catData = [
    {
      "name": "Fluffy",
      "breed": "Persian",
      "weight": "12 lbs",
      "coat_color": "white",
      "arrival_date": "June 30, 2023",
      "filename": "fluffy.jpg"
    },
    {
      "name": "Waffles",
      "breed": "American Shorthair",
      "weight": "9 lbs",
      "coat_color": "grey",
      "arrival_date": "July 1, 2023",
      "filename": "waffles.jpg"
    },
    {
      "name": "Milkshake",
      "breed": "Scottish Fold",
      "weight": "10 lbs",
      "coat_color": "white, black, and orange",
      "arrival_date": "June 30, 2023",
      "filename": "milkshake.jpg"
    },
    {
      "name": "Mitten",
      "breed": "Ragdoll",
      "weight": "9 lbs",
      "coat_color": "white and grey",
      "arrival_date": "June 29, 2023",
      "filename": "mitten.jpg"
    },
    {
      "name": "Queenie",
      "breed": "Burmese Cat",
      "weight": "8 lbs",
      "coat_color": "brown",
      "arrival_date": "July 4, 2023",
      "filename": "queenie.jpg"
    },
    {
      "name": "Olly",
      "breed": "Sphynx",
      "weight": "8 lbs",
      "coat_color": "white and grey",
      "arrival_date": "July 7, 2023",
      "filename": "olly.jpg"
    },
     {
      "name": "Salem",
      "breed": "British Shorthair",
      "weight": "12 lbs",
      "coat_color": "black",
      "arrival_date": "July 9, 2023",
      "filename": "salem.jpg"
    },
    {
      "name": "Squid",
      "breed": "Abyssinian",
      "weight": "9 lbs",
      "coat_color": "brown",
      "arrival_date": "July 9, 2023",
      "filename": "squid.jpg"
    },
    {
      "name": "Felix",
      "breed": "Siamese",
      "weight": "11 lbs",
      "coat_color": "white and brown",
      "arrival_date": "July 12, 2023",
      "filename": "felix.jpg"
    },
    {
      "name": "Luna",
      "breed": "British Shorthair",
      "weight": "11 lbs",
      "coat_color": "grey",
      "arrival_date": "July 13, 2023",
      "filename": "luna.jpg"
    },
  ];

  const seedCats = () => Cat.bulkCreate(catData);

  module.exports = seedCats;