let chai = require('chai');
let expect = chai.expect;
let algFile = require('../lib/lib-arabic-roman.js');

describe('Biblioteca Algarismos', () => {

  describe('Roman to Int', () => {

    it('II to 2', () => {

      expect(algFile.romanToInt('II')).to.equal(2);

    });
    it('V to 5', () => {

      expect(algFile.romanToInt('V')).to.equal(5);

    });
    it('XXVI to 26', () => {

      expect(algFile.romanToInt('XXVI')).to.equal(26);

    });
    it('XIX to 19', () => {

      expect(algFile.romanToInt('XIX')).to.equal(19);

    });
    it('xix to 19', () => {

      expect(algFile.romanToInt('xix')).to.equal(19);

    });
    it('CCCXCVIII to 398', () => {

      expect(algFile.romanToInt('CCCXCVIII')).to.equal(398);

    });
    it('MMMMDCCXXX to 4730', () => {

      expect(algFile.romanToInt('MMMMDCCXXX')).to.equal(4730);

    });
    it('MMMMCMXCIX to 4999', () => {

      expect(algFile.romanToInt('MMMMCMXCIX')).to.equal(4999);

    });
    it('CDLXXVI to 476', () => {

      expect(algFile.romanToInt('CDLXXVI')).to.equal(476);

    });
    it('XCII to 92', () => {

      expect(algFile.romanToInt('XCII')).to.equal(92);

    });
    it('MDCXCIX to 1699', () => {

      expect(algFile.romanToInt('MDCXCIX')).to.equal(1699);

    });
    it('MMCCIII to 2203', () => {

      expect(algFile.romanToInt('MMCCIII')).to.equal(2203);

    });
    it('xcic to 99', () => {

      expect(algFile.romanToInt('xcix')).to.equal(99);

    });

  });
  describe('Int to Roman', () => {

    it('5 to V', () => {

      expect(algFile.intToRoman('5')).to.equal('V');

    });
    it('5.5 to V - só aceita números inteiros', () => {

      expect(algFile.intToRoman('5.5')).to.equal('V');

    });
    it('10.8 to V - só aceita números inteiros', () => {

      expect(algFile.intToRoman('10.8')).to.equal('X');

    });
    it('26 to XXVI', () => {

      expect(algFile.intToRoman('26')).to.equal('XXVI');

    });
    it('19 to XIX', () => {

      expect(algFile.intToRoman('19')).to.equal('XIX');

    });
    it('398 to CCCXCVIII', () => {

      expect(algFile.intToRoman(398)).to.equal('CCCXCVIII');

    });
    it('4730 to MMMMDCCXXX', () => {

      expect(algFile.intToRoman('4730')).to.equal('MMMMDCCXXX');

    });
    it('5289 to error', () => {

      expect(algFile.intToRoman('5289')).to.equal('The input should be a number between 1 and 4999');

    });
    it('4999 to MMMMCMXCIX', () => {

      expect(algFile.intToRoman('4999')).to.equal('MMMMCMXCIX');

    });
    it('0 to error', () => {

      expect(algFile.intToRoman('0')).to.equal('The input should be a number between 1 and 4999');

    });
    it('476 to CDLXXVI', () => {

      expect(algFile.intToRoman(476)).to.equal('CDLXXVI');

    });
    it('092 to XCII', () => {

      expect(algFile.intToRoman(092)).to.equal('XCII');

    });
    it('000003 to III', () => {

      expect(algFile.intToRoman(000003)).to.equal('III');

    });
    it('00000000000040 to XL', () => {

      expect(algFile.intToRoman('00000000000040')).to.equal('XL');

    });
    it('000000000 to error', () => {

      expect(algFile.intToRoman('000000000')).to.equal('The input should be a number between 1 and 4999');

    });

  });

});