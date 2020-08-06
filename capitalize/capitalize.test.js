let capitalize = require('./capitalize');
test('first letter is capital', () => {
    expect(capitalize('testdrivendev')).toBe('Testdrivendev');    
});