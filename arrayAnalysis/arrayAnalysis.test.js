import {analyze} from './arrayAnalysis.js';

test('array of positive integers', () => {
    const actualObject = analyze([1,2,3,4]);
    const expectedObject = {average: 2.5, min: 1, max: 4, length: 4}
    expect(expectedObject).toMatchObject(actualObject);
});

test('min of array of floating point numbers', () => {
    const min = analyze([2.2, 3.23, 5.4, 8.18]).min;
    expect(min).toBeCloseTo(2.2);
});

test('max of array of floating point numbers', () => {
    const max = analyze([2.2, 3.23, 5.4, 8.18]).max;
    expect(max).toBeCloseTo(8.18);
});

test('average of array of floating point numbers', () => {
    const average = analyze([2.2, 3.23, 5.4, 8.18]).average;
    expect(average).toBeCloseTo(4.752);
});

test('average of array of floating point numbers', () => {
    const length = analyze([2.2, 3.23, 5.4, 8.18]).length;
    expect(length).toBe(4);
});