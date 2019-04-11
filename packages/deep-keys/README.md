# `deep-keys`

Simple function to return keys in object, even nested objects.

> Warning: Huge object should return 'Maximum call stack size exceeded' 

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