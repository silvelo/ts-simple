//@ts-check

const path = require('path');
const replace = require('replace-in-file');
const os = require('os');
const folderName = process.env.LERNA_PACKAGE_NAME.replace('@ts-simple/', '');
const directory = path.join(process.env.LERNA_ROOT_PATH, 'packages', folderName);
const packageJson = path.join(directory, 'package.json');
const readmeFile = path.join(directory, 'README.md');
const package = require(packageJson);

let coverallsString =
  `[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=${process.env.LERNA_PACKAGE_NAME}@${package.version})](https://coveralls.io/github/silvelo/ts-simple?branch=${process.env.LERNA_PACKAGE_NAME}@${package.version})`

let travisString =
  `[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=${process.env.LERNA_PACKAGE_NAME}@${package.version})](https://travis-ci.org/silvelo/ts-simple?branch=${process.env.LERNA_PACKAGE_NAME}@${package.version})`

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