const assert = require("assert");
const mod = require("../../src/mod");

describe("mod", () => {
    it("mod 3", () =>{
        assert.equal(mod(3), true)
        assert.equal(mod(1), false)
        assert.equal(mod(0), false)
        assert.equal(mod(0.1), false)
        assert.equal(mod("1"), false)
    });
});