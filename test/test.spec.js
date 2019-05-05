let chai = require('chai');
let expect = chai.expect;
let cpfValidator = require('../lib/libCPF.js');
let cardValidator = require('../lib/libCreditCard.js');
let algFile = require('../lib/libAlgarismos.js');

describe('Biblioteca CPF', () => {

  describe('função cpfValidator', () => {

    describe('cpfs válidos', () => {

      it('meu cpf', () => {

        expect(cpfValidator(41250735890)).to.equal(true);

      });
      it('meu cpf', () => {

        expect(cpfValidator('412.507.358-90')).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator('23560525420')).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator(40942348885)).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator('40942348885')).to.equal(true);

      });
    });
    describe('cpfs INválidos', () => {

      it('cpf INválido', () => {

        expect(cpfValidator('40955548885')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('123.456.789-01')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator(98765432103)).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('11111111111')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('99999999999')).to.equal(false);

      });

    });

  });

});

describe('Biblioteca Cartão de Crédito', () => {

  describe('função cardValidator', () => {

    describe('cartões válidos', () => {

      it('meu cartão virtual', () => {

        expect(cardValidator(5502099757664036)).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('4012 0010 3714 1112')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('5442054108091705')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator(30293810466644)).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('6011137424214298')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator(372181965977158)).to.equal(true);

      });

    });
    describe('cartões INválidos', () => {

      it('cartão INválido', () => {

        expect(cardValidator(123456789012345)).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('2003004005060708')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('472837284059123')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator(820170273045072)).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('5502199727664036')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator(4012001037141135)).to.equal(false);

      });

    });

  });

});

describe('Biblioteca Algarismos', () => {

  describe('Roman to Int', () => {

    it('5 to V', () => {

      expect(algFile.romanToInt('V')).to.equal(5);

    });
    it('26 to XXVI', () => {

      expect(algFile.romanToInt('XXVI')).to.equal(26);

    });
    it('19 to XIX', () => {

      expect(algFile.romanToInt('XIX')).to.equal(19);

    });
    it('19 to xix', () => {

      expect(algFile.romanToInt('xix')).to.equal(19);

    });
    it('398 to CCCXCVIII', () => {

      expect(algFile.romanToInt('CCCXCVIII')).to.equal(398);

    });
    it('4730 to MMMMDCCXXX', () => {

      expect(algFile.romanToInt('MMMMDCCXXX')).to.equal(4730);

    });
    it('4999 to MMMMCMXCIX', () => {

      expect(algFile.romanToInt('MMMMCMXCIX')).to.equal(4999);

    });
    it('476 to CDLXXVI', () => {

      expect(algFile.romanToInt('CDLXXVI')).to.equal(476);

    });
    it('92 to XCII', () => {

      expect(algFile.romanToInt('XCII')).to.equal(92);

    });
    it('1699 to MDCXCIX', () => {

      expect(algFile.romanToInt('MDCXCIX')).to.equal(1699);

    });
    it('2203 to MMCCIII', () => {

      expect(algFile.romanToInt('MMCCIII')).to.equal(2203);

    });
    it('99 to xcic', () => {

      expect(algFile.romanToInt('xcix')).to.equal(99);

    });

  });
  describe('Int to Roman', () => {

    it('5 to V', () => {

      expect(algFile.intToRoman('5')).to.equal('V');

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
    it('0092 to XCII', () => {

      expect(algFile.intToRoman('0092')).to.equal('XCII');

    });
    it('000000000 to error', () => {

      expect(algFile.intToRoman('000000000')).to.equal('The input should be a number between 1 and 4999');

    });

  });

});