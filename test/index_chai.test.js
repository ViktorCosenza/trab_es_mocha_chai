const { describe, it, before, after } = require("mocha");
const { expect } = require('chai');

const { add, sub, addIfGreater, isEven } = require("../index");

describe("Mathematical Ops (with Chai)", () => {
    describe("Basic", () => {
        it("When one plus one is Two", () => {
            result = 1 + 1;
            expect(result).to.be.equal(2, "Result should be Two!")
        });
        it("When One plus one is Two", () => {
            result = add(1, 1);
            expect(result).to.be.equal(2, "Result should be Two!")
        });
        it("When one minus one is zero", () => {
            result = sub(1, 1);
            expect(result).to.be.equal(0, "Result should be Zero!")
        })
    });

    describe("addIfGreater adds two numbers only if a > b", () => {
        it("Should throw an error when one plus Two", () => {
            fn = addIfGreater.bind(null, 1, 2);
            expect(fn).to.throw("A is not greater than B");
        });
        it("When Two plus One is Three", () => {
            result = addIfGreater(2, 1);
            expect(result).to.be.equal(3, "Result should be Three!")
        });
        it("When minus One plus minus Two is minus Three", () => {
            result = addIfGreater(-1, -2);
            expect(result).to.be.equal(-3, "Result should be minus Three!")
        });
    });

    describe("isEven checks if a number is even", () => {
        it("Should return false when One", () => {
            result = isEven(1);
            expect(result).to.be.false;
        });
        it("Should return true when Two", () => {
            result = isEven(2);
            expect(result).to.be.true;
        });
        it("Should throw an error when negative numbers", () => {
            fn = isEven.bind(null, -100);
            expect(fn).to.throw("N Should be a natural number")
        });
    });
});
