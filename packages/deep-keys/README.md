# `deep-keys`


<!-- START SHIELD -->
[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=@ts-simple\deep-keys@0.0.3)](https://travis-ci.org/silvelo/ts-simple?branch=@ts-simple\deep-keys@0.0.3)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=@ts-simple\deep-keys@0.0.3)](https://coveralls.io/github/silvelo/ts-simple?branch=@ts-simple\deep-keys@0.0.3)
<!-- END SHIELD -->
![npm](https://img.shields.io/npm/dm/%40ts-simple%2Fdeep-keys.svg)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@ts-simple/deep-keys.svg)
![NPM](https://img.shields.io/npm/l/@ts-simple/deep-keys.svg)


Simple function to return keys in object, even nested objects.

> Warning: Huge object should return 'Maximum call stack size exceeded' 

## API

* deepObject(object:Object) => string[];

## Usage

### Simple Object
```ts
import {deepKeys} from '@ts-simple/deep-keys'

const object = { a: 1, b: 2 };
console.log(deepKeys(object));

/*  Expected result same as Object.keys => ['a', 'b']  */

```

### Nested Objects
```ts
import {deepKeys} from '@ts-simple/deep-keys'

const object = { a:  {aa: 1, bb: 2} , b: 2 };
console.log(deepKeys(object));

/*  Expected result => ['a.aa', 'a.bb', 'b']  */

```
