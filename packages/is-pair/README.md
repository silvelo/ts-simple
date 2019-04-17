# `is-pair`

<!-- START SHIELD -->
[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=@ts-simple\is-pair\@\0.0.2)](https://travis-ci.org/silvelo/ts-simple?branch=@ts-simple\is-pair\@\0.0.2)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=@ts-simple\is-pair\@\0.0.2)](https://coveralls.io/github/silvelo/ts-simple?branch=@ts-simple\is-pair\@\0.0.2)
<!-- END SHIELD -->
![npm](https://img.shields.io/npm/dm/%40ts-simple%2Fis-pair.svg)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@ts-simple/is-pair.svg)
![NPM](https://img.shields.io/npm/l/@ts-simple/is-pair.svg)

Simple function to verify is pair

## API

* isPair(n: number) => boolean;

## Usage

```ts
import {isPair} from '@ts-simple/is-pair'
const pair = isPair(2);
console.log(pair);
/* Should return true*/

```