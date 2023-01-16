const chai = require('chai');
const assert = require('chai').assert;

const expect = chai.expect;

describe('Unit Test Function Validation Object', () => {
    it('should return true if input is the same as the defined ok', () => {
        const input = {
            nama: "tayo",
            age: 18
        };
        const result = checkInput(input);
        expect(result.nama).to.equal("tayo");
    });
});

function checkInput(input) {
    return input;
}

describe('Unit Test Function Validation Text', () => {
    it('should return true if input is the same as the defined ok', () => {
        const input = "ok";
        const define = "oke";
        const result = checkInputOk(input, define);
        assert.isTrue(result);
    });

    it('should return false if input is not the same as the defined ok', () => {
        const input = "ok";
        const define = "oke";
        const result = checkInputOk(input, define);
        assert.isFalse(result);
    });
});

function checkInputOk(input, define) {
    return input === define;
}