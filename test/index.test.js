const { describe, it, before, after } = require("mocha");

const { add, sub } = require("../index");

describe("Mathematical Ops", () => {
    it("One plus one is Two", () => {
        result = 1 + 1;
        if (result !== 2) { throw Error("Result should be Two!") };
    });
});

describe("Mathematical Ops", () => {
    it("One plus one is Two", () => {
        result = add(1, 1);
        if (result !== 2) { throw Error("Result should be two!") }
    });
    it("One minus one is zero", () => {
        result = sub(1, 1);
        if (result !== 0) { throw Error("Result should be zero!") }
    });
});

const makeConnection = () => 1;
const destroyConnection = (a) => a;

describe("Test database", () => {
    let connection;
    before(() => connection = makeConnection());
    after(() => destroyConnection(connection));

    it("Feches rows", () => {
        /* Test code */
    });
});