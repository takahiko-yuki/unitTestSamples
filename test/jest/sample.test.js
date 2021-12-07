const sample = require("../../src/sample");

describe("test", () => {
    test("Trick or Treat", () => {
        expect(sample(1,2)).toBe(6);
        expect(sample(5,3)).toBe(5040);
        expect(sample(15,15)).toBe(1307674368000);
    });
});