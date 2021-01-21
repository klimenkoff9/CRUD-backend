const { Player } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Player.create({
      firstName: "Kyrie",
      lastName: "Irving",
      jerseyNumber: 11
    }),
    Player.create({
      firstName: "LeBron",
      lastName: "James",
      jerseyNumber: 23
    }),
    Player.create({
      firstName: "Luka",
      lastName: "Doncic",
      jerseyNumber: 77
    })
  ]);
}

module.exports = seedDatabase;
