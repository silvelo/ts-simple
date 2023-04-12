# `is-boolean`

<!-- START SHIELD -->
[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=@ts-simple/is-boolean@1.0.0)](https://travis-ci.org/silvelo/ts-simple?branch=@ts-simple/is-boolean@1.0.0)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=@ts-simple/is-boolean@1.0.0)](https://coveralls.io/github/silvelo/ts-simple?branch=@ts-simple/is-boolean@1.0.0)
<!-- END SHIELD -->
![npm](https://img.shields.io/npm/dm/%40ts-simple%2Fis-boolean.svg)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@ts-simple/is-boolean.svg)
![NPM](https://img.shields.io/npm/l/@ts-simple/is-boolean.svg)



Simple function to convert string (true, false) to boolean value.


## API

* isBoolean(value:string, strict: boolean = true) => boolean | null;


## Usage

```ts
import { isBoolean } from '@ts-simple/is-boolean'

console.log(isBoolean("true"));

/*  Expected result is true*/

console.log(isBoolean("truE"));

/*  Expected result is true*/

console.log(isBoolean("false"));

/*  Expected result is false*/

console.log(isBoolean("falsE"));

/*  Expected result is false*/

console.log(isBoolean("randomValue"));

/*  Expected result is null*/

console.log(isBoolean("randomValue", false));

/*  Expected result is false*/

```
