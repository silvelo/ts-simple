//@ts-check

const path = require('path');
const replace = require('replace-in-file');
const os = require('os');
const fs = require('fs');
const updateSection = require('update-section');

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


const update = `<!-- START SHIELD -->${os.EOL}${travisString}${os.EOL}${coverallsString}${os.EOL}<!-- END SHIELD -->`;

function matchesStart(line) {
  return (/<!-- START SHIELD -->/).test(line);
}

function matchesEnd(line) {
  return (/<!-- END SHIELD -->/).test(line);
}

try {
  const readmeContent = fs.readFileSync(readmeFile, 'utf-8');
  const updated = updateSection(readmeContent, update, matchesStart, matchesEnd, false);
  fs.writeFileSync(readmeFile, updated);
} catch (e) {
  console.log(e.message);
}


