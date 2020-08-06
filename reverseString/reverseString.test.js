const reverseString = require('./reverseString');
test('reverses multiple words', () => {
    expect(reverseString('mr robot')).toBe('tobor rm');
});

test('reverses single word', () => {
    expect(reverseString('mrrobot')).toBe('toborrm');
});

test('works with numbers and punctuation', () => {
    expect(reverseString('mr. robot 0')).toBe('0 tobor .rm');
});