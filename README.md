# Conversor de algarismos arábicos <-> romanos v.1.0.0

**Esta biblioteca destina-se à conversão de algarismos arábicos para romanos, e vice-versa.**
Na versão atual é capaz de converter números arábicos de 1 a 4999 para seus equivalentes algarismos romanos. Também realiza a conversão de romanos para arábicos, aceitando o input tanto em letras maiúsculas, quanto minúsculas.

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
- funcionalidades: conversão de números de 1 a 4999, de algarismos arábicos para romanos e de romanos para arábicos.
- aceitando input de números e strings.
- não aceita números que se iniciem com zero, apenas strings (ex: não aceita 010, mas aceita '010').
- na conversão de algarismos romanos, aceita a escrita dos algarismos tanto em letras maiúsculas, quanto minúsculas.
