# `str-2-bool`

<!-- START SHIELD -->
[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=@ts-simple/str-2-bool@1.0.0)](https://travis-ci.org/silvelo/ts-simple?branch=@ts-simple/str-2-bool@1.0.0)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=@ts-simple/str-2-bool@1.0.0)](https://coveralls.io/github/silvelo/ts-simple?branch=@ts-simple/str-2-bool@1.0.0)
<!-- END SHIELD -->
![npm](https://img.shields.io/npm/dm/%40ts-simple%2Fstr-2-bool.svg)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@ts-simple/str-2-bool.svg)
![NPM](https://img.shields.io/npm/l/@ts-simple/str-2-bool.svg)



Simple function to convert string (true, false) to boolean value.


## API

* str2Bool(value:string, strict: boolean = true) => boolean | null;


## Usage

```ts
import { str2Bool } from '@ts-simple/str-2-bool'

console.log(str2Bool("true"));

/*  Expected result is true*/

console.log(str2Bool("truE"));

/*  Expected result is true*/

console.log(str2Bool("false"));

/*  Expected result is false*/

console.log(str2Bool("falsE"));

/*  Expected result is false*/

console.log(str2Bool("randomValue"));

/*  Expected result is null*/

console.log(str2Bool("randomValue", false));

/*  Expected result is false*/

```
