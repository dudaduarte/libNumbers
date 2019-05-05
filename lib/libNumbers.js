const romanToIntNumbers = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const intToRomanUnit = {
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
}

const intToRomanDozens = {
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
}

const intToRomanHundreds = {
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
}

const intToRomanThousands = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM',
  4: 'MMMM'
}

const romanToInt = string => {
  let arrString = string.toUpperCase().split('').map(element => romanToIntNumbers[element])
  let result = arrString.reduce((acc, current, index) => current < arrString[index + 1] ? acc - current : acc + current, 0);

  return result;
}

const setNumber = num => {
  return num ? num : ''
}

const intToRoman = num => {

  let arrNum = num.toString().split('').map(num => Number(num));
  let numRoman;

  if (arrNum.length < 2) {

    numRoman = `${intToRomanUnit[arrNum[0]]}`;

  } else if (arrNum.length < 3) {

    numRoman = `${intToRomanDozens[arrNum[0]]}${intToRomanUnit[arrNum[1]]}`;

  } else if (arrNum.length < 4) {

    numRoman = `${intToRomanHundreds[arrNum[0]]}${intToRomanDozens[arrNum[1]]}${intToRomanUnit[arrNum[2]]}`;

  } else {

    numRoman = `${intToRomanThousands[arrNum[0]]}${intToRomanHundreds[arrNum[1]]}${intToRomanDozens[arrNum[2]]}${intToRomanUnit[arrNum[3]]}`;

  }

  return num < 1 || num > 4999 ? 'The input should be a number between 1 and 4999' : numRoman;

}

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;