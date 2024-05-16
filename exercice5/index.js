// exercices/exercice1/index.js

const faker = require("faker-br");

function createDataset() {
  return {
    streetName: faker.address.streetName(),
    streetNumber: faker.address.streetAddress(),
  };
}

module.exports = createDataset;
