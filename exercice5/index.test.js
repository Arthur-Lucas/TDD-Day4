const faker = require("faker-br");

let dataset;

beforeAll(() => {
  console.log("Starting all tests...");
});

beforeEach(() => {
  dataset = {
    streetName: faker.address.streetName(),
    streetNumber: faker.address.streetAddress(),
  };
  console.log(`Created new dataset: ${JSON.stringify(dataset)}`);
});

afterEach(() => {
  dataset = null;
  console.log("Dataset has been reset.");
});

afterAll(() => {
  console.log("All tests completed.");
});

test("DatasetHavePropertyStreeName&NumberOK", () => {
  expect(dataset).toHaveProperty("streetName");
  expect(dataset).toHaveProperty("streetNumber");
  console.log(`Testing dataset: ${JSON.stringify(dataset)}`);
});
