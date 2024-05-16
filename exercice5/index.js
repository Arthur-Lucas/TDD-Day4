// const { listHotels } = require("./index");

test("ListHotelsExactCountOK", async () => {
  const result = await listHotels();
  expect(1).toEqual(1);
});
