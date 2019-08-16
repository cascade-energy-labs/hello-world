const assert = require("assert");
const hello = require("../lib/hello");

describe("hello", () => {
    it("should generate phrase default", function () {
        assert.strictEqual(hello(), "Hello world!")
    });
    it("should generate phrase fallback", function () {
        assert.strictEqual(hello("foo"), "Hello world!")
    });
    it("should generate phrase en", function () {
        assert.strictEqual(hello("en"), "Hello world!")
    });
    it("should generate phrase es", function () {
        assert.strictEqual(hello("es"), "¡Hola mundo!")
    });
});
