# Conversor de algarismos arábicos <-> romanos v.1.0.0

**Esta biblioteca destina-se à conversão de algarismos arábicos para romanos, e vice-versa.**
Na versão atual é capaz de converter números arábicos inteiros de 1 a 4999 para seus equivalentes algarismos romanos. Também realiza a conversão de romanos para arábicos, aceitando o input tanto em letras maiúsculas, quanto minúsculas.

## Como instalar:

```shell

$  npm install lib-arabic-roman

```

## Como utilizar:

### Convertendo de algarismos arábicos para romanos:

```node

> const intToRoman = require("../lib/lib-arabic-roman").intToRoman;
> intToRoman(19)
> // returns "XIX"

```

### Convertendo de algarismos romanos para arábicos:

```node

> const romanToInt = require("../lib/lib-arabic-roman").romanToInt;
> romanToInt("XIX")
> // returns 19

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- Funcionalidades: conversão de números de 1 a 4999, de algarismos arábicos para romanos e de romanos para arábicos.
- Aceitando input de números e strings.
- Não aceita números que se iniciem com zero, apenas strings (ex: não aceita 010, mas aceita '010').
- Não converte números decimais. Nesses casos, a biblioteca converterá o número inteiro correspondente, desconsiderando as casas decimais.
- Na conversão de algarismos romanos, aceita a escrita dos algarismos tanto em letras maiúsculas, quanto minúsculas.
