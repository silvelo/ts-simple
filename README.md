# ts-simple

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.com/silvelo/ts-simple.svg?branch=master)](https://travis-ci.com/silvelo/ts-simple)
[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=master)](https://coveralls.io/github/silvelo/ts-simple?branch=master)


A collection of packages for simplifying your life. The most common packages contain simple functions that I used in a lot of my projects. By this way I try to unify that functions in a repository and testing to avoid bugs.

Following DRY philosophy.

### Packages

| Package | Version | Links |
| ------- | ------- |:-----:|
| [`@ts-simple/deep-keys`](https://www.npmjs.com/package/@ts-simple/deep-keys) | [![version](https://img.shields.io/npm/v/@ts-simple/deep-keys/latest.svg)](https://www.npmjs.com/package/@ts-simple/deep-keys) | [`README.md`](packages/deep-keys/README.md)
| [`@ts-simple/is-pair`](https://www.npmjs.com/package/@ts-simple/is-pair) | [![version](https://img.shields.io/npm/v/@ts-simple/is-pair/latest.svg)](https://www.npmjs.com/package/@ts-simple/is-pair) | [`README.md`](packages/is-pair/README.md)


## How to contribution
---
1. Generate package.
  * Option 1

    Create new package with lerna.
    ```
    lerna create
    ```
  * Option 2

    Convert and exists package to lerna package. More [info](https://github.com/lerna/lerna/tree/master/commands/import#readme)

  > Note: In both cases follow the code rules.

2. Configure package.json
  * Add public access.
    ```json
    publishConfig: {
      "access": "public"
    }
    ```
  * Set correct scripts
    ```
    scripts: {
      "tsc": "tsc",
      "test":"test",
      "coverage":"test with coverage"
    }
    ```
    > Note: For test you can use any test framework.

  * Add files LICENSE.txt, tsconfig.json, README.md

  3. Configure README.md
  
  * Add shield tag comment to your readme to generate travis and coverall shields automatically in build time.
    ```text
    <!-- Shield Tag -->
    ```

All __devDependencies__ go in root package and try to avoid use externnal dependencies in your's packages.

## How to publish
---

The permision to publish librarys is the organization collaborators. (@ts-simple). If your want your package will be include in this scope, you only need a to make a PR.

The members only need to run the script and establish the simver.
```
npm run lerna:version
```

Before publish update the badges branch version.

## Future
---

Generate core packages to group common functionality in same package and avoid installing multiple packages.
