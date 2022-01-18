// Include your code here

const stringLength = (str) => {
  const characterCount = str.length;
  if (characterCount) {
    if (characterCount <= 10) {
      return characterCount;
    }
    throw new Error('String can\'t be longer than 10 characters');
  }
  throw new Error('Unexpected Empty String');
};

const reverseString = (str) => str.split('').reverse().join('');

function Calculator() {
  this.add = (a, b) => a + b;
  this.substract = (a, b) => a - b;
  this.multiply = (a, b) => a * b;
  this.divide = (a, b) => {
    if (b === 0) {
      throw new Error('Can\'t Divide By Zero');
    }
    return a / b;
  };
}

const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Error: Cannot capitalize other type than String');
  }
  const newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
};

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
};