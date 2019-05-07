const intNumbers = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const romanUnit = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X'
};

const romanDozens = {
  0: '',
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
};

const romanHundreds = {
  0: '',
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const romanThousands = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM',
  4: 'MMMM'
};

const romanToInt = string => {
  let arrString = string.toUpperCase().split('').map(element => intNumbers[element]);
  let result = arrString.reduce((acc, current, index) => {
    return current < arrString[index + 1] ? acc - current : acc + current;
  }, 0);

  return result;
};

const intToRoman = num => {
  let arrNum = parseInt(num, 10).toString(10).split('').map(Number);
  let numRoman;
  
  if (arrNum.length === 1) {
    numRoman = `${romanUnit[arrNum[0]]}`;
  } else if (arrNum.length === 2) {
    numRoman = `${romanDozens[arrNum[0]]}${romanUnit[arrNum[1]]}`;
  } else if (arrNum.length === 3) {
    numRoman = `${romanHundreds[arrNum[0]]}${romanDozens[arrNum[1]]}${romanUnit[arrNum[2]]}`;
  } else {
    numRoman = `${romanThousands[arrNum[0]]}${romanHundreds[arrNum[1]]}${romanDozens[arrNum[2]]}${romanUnit[arrNum[3]]}`;
  }

  return num < 1 || num > 4999 ? 'The input should be a number between 1 and 4999' : numRoman;
};

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;