//@ts-check

const path = require('path');
const replace = require('replace-in-file');
const os = require('os');

const PACKAGE_NAME = process.env.LERNA_PACKAGE_NAME;
const ROOT_PATH = process.env.LERNA_ROOT_PATH;
const folderName = PACKAGE_NAME.replace('@ts-simple/', '');
const directory = path.join(ROOT_PATH, 'packages', folderName);
const readmeFile = path.join(directory, 'README.md');
const package = require(path.join(directory, 'package.json'));
const branch = path.join(PACKAGE_NAME, '@', package.version)

let coverallsString =
  `[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=${branch})](https://coveralls.io/github/silvelo/ts-simple?branch=${branch})`

let travisString =
  `[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=${branch})](https://travis-ci.org/silvelo/ts-simple?branch=${branch})`

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