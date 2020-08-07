let capitalize = require('./capitalize');
test('first letter is lowercase', () => {
    expect(capitalize('testdrivendev')).toBe('Testdrivendev');    
});

test('first letter is uppercase', () => {
    expect(capitalize('Testdrivendev')).toBe('Testdrivendev');
});

test('works with number as first letter', () => {
    expect(capitalize('0testdrivendev')).toBe('0testdrivendev');
});

test('works with punctuation', () => {
    expect(capitalize('!testdrivendev')).toBe('!testdrivendev');
});