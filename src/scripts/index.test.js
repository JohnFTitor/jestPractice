const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./index.js');

describe('String Length', () => {
  test('String: Hello', () => {
    const characterCount = stringLength('Hello');
    expect(characterCount).toBe(5);
  });
  test('String: H', () => {
    const characterCount = stringLength('H');
    expect(characterCount).toBe(1);
  });
  test('Empty String', () => {
    expect(() => {
      stringLength('');
    }).toThrow('Unexpected Empty String');
  });
  test('String longer than 10 characters', () => {
    expect(() => {
      stringLength('ThisIsALongWord');
    }).toThrow('String can\'t be longer than 10 characters');
  });
});

describe('Reverse String', () => {
  test('Reverse Hello', () => {
    const reversedString = reverseString('Hello');
    expect(reversedString).toBe('olleH');
  });
  test('Reverse H', () => {
    const reversedString = reverseString('H');
    expect(reversedString).toBe('H');
  });
});

describe('Calculator', () => {
  const calculator = new Calculator();
  describe('Add Method', () => {
    test('Add 5 to 6', () => {
      const result = calculator.add(5, 6);
      expect(result).toBe(11);
    });
    test('Add 5.5 to 0.5', () => {
      const result = calculator.add(5.5, 0.5);
      expect(result).toBeCloseTo(6.0);
    });
    test('Add 5 to -6', () => {
      const result = calculator.add(5, -6);
      expect(result).toBe(-1);
    });
  });
  describe('Substract Method', () => {
    test('Substract 10 to 25', () => {
      const result = calculator.substract(25, 10);
      expect(result).toBe(15);
    });
    test('Substract -10 to 25', () => {
      const result = calculator.substract(25, -10);
      expect(result).toBe(35);
    });
    test('Substract 1 to 0.5', () => {
      const result = calculator.substract(0.5, 1);
      expect(result).toBeCloseTo(-0.5);
    });
  });
  describe('Multiply Method', () => {
    test('Multiply 10 to 25', () => {
      const result = calculator.multiply(25, 10);
      expect(result).toBe(250);
    });
    test('Multiply -10 to 25', () => {
      const result = calculator.multiply(25, -10);
      expect(result).toBe(-250);
    });
    test('Multiply 2 to 0.5', () => {
      const result = calculator.multiply(0.5, 2);
      expect(result).toBeCloseTo(1.0);
    });
  });
  describe('Divide Method', () => {
    test('Divide 25/10', () => {
      const result = calculator.divide(25, 10);
      expect(result).toBeCloseTo(2.5);
    });
    test('Divide 25/-10', () => {
      const result = calculator.divide(25, -10);
      expect(result).toBeCloseTo(-2.5);
    });
    test('Divide 0.5/2', () => {
      const result = calculator.divide(0.5, 2);
      expect(result).toBeCloseTo(0.25);
    });
    test('Divide by Zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Can\'t Divide By Zero');
    });
  });
});

describe('Capitalize', () => {
  test('Capitalize hello', () => {
    const capitalized = capitalize('hello');
    expect(capitalized).toBe('Hello');
  });
  test('Capitalize goodBye', () => {
    const capitalized = capitalize('goodBye');
    expect(capitalized).toBe('GoodBye');
  });
  test('Capitalize number', () => {
    expect(() => capitalize(8)).toThrow('Error: Cannot capitalize other type than String');
  });
});