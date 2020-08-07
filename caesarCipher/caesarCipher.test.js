const caesarEncrypt = require("./caesarCipher");
test('encrypts with correctly with positive integers', () => {
    expect(caesarEncrypt('marcusaurelius', 4)).toBe('qevgyweyvipmyw');
});

test('encrypts correctly with spaces', () => {
    expect(caesarEncrypt('marcus aurelius', 4)).toBe('qevgyw eyvipmyw');
});

test('encrypts correctly with punctuation', () => {
    expect(caesarEncrypt(',marcus. aurelius!', 4)).toBe(',qevgyw. eyvipmyw!');
});

test('encrypts correctly with large integers', () => {
    expect(caesarEncrypt('marcusaurelius', 150000)).toBe('sgxiaygaxkroay');
})

test('encrypts correctly uppercase letters', () => {
    expect(caesarEncrypt('MarcusAureLiuS', 4)).toBe('QevgywEyviPmyW')
})

describe('exception test', () => {
    it('should throw an exception', () => {
      expect(() => caesarEncrypt('marcus aurelius', -19)).toThrow(Error);
    });
});