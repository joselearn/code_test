import roman from './roman';

test('should convert 1 to I,', () => {
    var result = roman.ToRoman(1);
    expect(result).toEqual('I')
});


test('should convert 5 to V,', () => {
    var result = roman.ToRoman(5);
    expect(result).toEqual('V')
});

test('should convert 8 to VIII,', () => {
    var result = roman.ToRoman(8);
    expect(result).toEqual('VIII')
});

test('should convert 20 to XX,', () => {
    var result = roman.ToRoman(20);
    expect(result).toEqual('XX')
});