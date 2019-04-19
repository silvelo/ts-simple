# `is-empty`

<!-- START SHIELD -->
[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=@ts-simple\is-empty@0.0.1)](https://travis-ci.org/silvelo/ts-simple?branch=@ts-simple\is-empty@0.0.1)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=@ts-simple\is-empty@0.0.1)](https://coveralls.io/github/silvelo/ts-simple?branch=@ts-simple\is-empty@0.0.1)
<!-- END SHIELD -->
![npm](https://img.shields.io/npm/dm/%40ts-simple%2Fis-empty.svg)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@ts-simple/is-empty.svg)
![NPM](https://img.shields.io/npm/l/@ts-simple/is-empty.svg)


Simple function to check if object is empty. Can validate all type of objects by set strict to false.


## API

* isEmpty(object:Object, strict: boolean = true) => boolean | NAO Exception (Not An Object Exception);
* NAO

## Usage

```ts
import { isEmpty } from '@ts-simple/is-empty'

const object = { a: 1, b: 2 };
console.log(isEmpty(object));

/*  Expected result is false*/

const object = {};
console.log(isEmpty(object));

/*  Expected result is true*/

const object = [];
console.log(isEmpty(object));

/*  Expected result is NAO Error*/

const object = [];
console.log(isEmpty(object, false));

/*  Expected result is true*/

```
