import { divide } from '../src/calculator.js';

describe('divide',  () => {
    it('division with positive numbers', () => {
        expect(divide(8, 4)).toBe(2);
    });

    it('throws when first input is not number', () => {
        expect(() => divide("8", 4)).toThrow('Both arguments must be numbers');
    });

    it('throws when second input is not number', () => {
        expect(() => divide(4, "8")).toThrow('Both arguments must be numbers');
    });

    it('throws when inputs are NaN', () => {
        expect(() => divide(NaN, 4)).toThrow('Arguments cannot be NaN');
    });

    it('throws when number is zero', () => {
        expect(() => divide(8, 0)).toThrow('Division by zero is not allowed');
    });

    it('throws when input is missing', () => {
        expect(() => divide()).toThrow('Both arguments must be numbers');
    });


});