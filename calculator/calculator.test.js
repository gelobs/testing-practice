const calculator = require('./calculator');
const calc = calculator();

// Testing addition

test('adding 1 + 1 equals 2', () => {
    expect(calc.add(1, 1)).toBe(2);
});

test('adding -1 + 1 equals 0', () => {
    expect(calc.add(-1,1)).toBe(0);
});

test('addition works with floating point numbers', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Testing subtraction

test('subtracting negative numbers', () => {
    expect(calc.subtract(-5, -3)).toBe(-2);
});

test('subtracting positive numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
});

test('subtraction works with floating point numbers', () => {
    expect(calc.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

// Testing division

test('divide positive numbers without remainder', () => {
    expect(calc.divide(10, 5)).toBe(2);
});

test('divide positive numbers with remainder', () => {
    expect(calc.divide(10, 3)).toBeCloseTo(3.33);
});

test('negative quotient', () => {
    expect(calc.divide(-10, 3)).toBeCloseTo(-3.33);
});

test('negative dividend and divisor gives positive quotient', () => {
    expect(calc.divide(-10,-3)).toBeCloseTo(3.33);
});

test('floating point dividend and divisor', () => {
    expect(calc.divide(0.2, 0.23)).toBeCloseTo(0.869);
});

// test('divide by zero', () => {
//     expect(() => {
//         calc.divide(15, 0));
//     }.toThrow(Error);
// };
describe('exception test', () => {
    it('should throw an exception', () => {
      expect(() => calc.divide(1, 0)).toThrow(Error);
    });
});

// Testing multiplication

test('multiply positive integers', () => {
    expect(calc.multiply(10, 5)).toBe(50);
});

test('multiply negative integers', () => {
    expect(calc.multiply(-10, -5)).toBe(50);
});

test('multiplication gives negative result', () => {
    expect(calc.multiply(-10, 5)).toBe(-50);
});

test('multiply floating point numbers', () => {
    expect(calc.multiply(0.032, 0.51)).toBeCloseTo(0.0163);
});