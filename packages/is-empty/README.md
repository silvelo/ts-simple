# `is-empty`

<!-- Shield Tag Start -->

<!-- Shield Tag End-->
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
