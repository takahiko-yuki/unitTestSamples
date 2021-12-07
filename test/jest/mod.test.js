const mod = require("../../src/mod");

describe("test", () => {

    console.log("Test start.")
    test("mod 3", () => {
        expect(mod(2)).toBe(false);
        expect(mod(3)).toBe(true);
        expect(mod(0)).toBe(false);
        expect(mod("0")).toBe(false);
    });
});