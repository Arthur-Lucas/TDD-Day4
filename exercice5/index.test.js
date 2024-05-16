// exercices/exercice1/index.test.js

const createDataset = require("./index");

let dataset;

beforeAll(() => {
  console.log("Starting all tests...");
});

beforeEach(() => {
  dataset = createDataset();
  console.log(`Created new dataset: ${JSON.stringify(dataset)}`);
});

afterEach(() => {
  dataset = null;
  console.log("Dataset has been reset.");
});

afterAll(() => {
  console.log("All tests completed.");
});

test("example test", () => {
  expect(dataset).toHaveProperty("streetName");
  expect(dataset).toHaveProperty("streetNumber");
  console.log(`Testing dataset: ${JSON.stringify(dataset)}`);
});
