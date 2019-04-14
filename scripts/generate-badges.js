//@ts-check

const path = require('path');
const replace = require('replace-in-file');
const os = require('os');


const parse = process.env.TRAVIS_BRANCH.replace('@ts-simple/', '');
const folderName = parse.substr(0, parse.indexOf('@'))
const directory = path.join(process.env.TRAVIS_BUILD_DIR, 'packages', folderName);
const readmeFile = path.join(directory, 'README.md');
console.log(`folderName: ${folderName}`);
console.log(`directory: ${directory}`);
console.log(`TRAVIS_BRANCH: ${process.env.TRAVIS_BRANCH}`);
let coverallsString =
  `[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=${process.env.TRAVIS_BRANCH})](https://coveralls.io/github/silvelo/ts-simple?branch=${process.env.TRAVIS_BRANCH})`

let travisString =
  `[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=${process.env.TRAVIS_BRANCH})](https://travis-ci.org/silvelo/ts-simple?branch=${process.env.TRAVIS_BRANCH})`

const tagKey = '<!-- Shield Tag -->';

const data = `${travisString}${os.EOL}${coverallsString}`;

const replaceOptions = {
  files: readmeFile,
  from: tagKey,
  to: data,
};

(async () => {
  try {
    const changes = await replace(replaceOptions)
    console.log('Modified files:', changes.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
})(); 