//@ts-check

const path = require('path');
const os = require('os');
const fs = require('fs');
const updateSection = require('update-section');

const Input = require('prompt-input');

const input  = new Input({
    message: `Version fo ${process.env.LERNA_PACKAGE_NAME}`,
    name: 'version',
    validator: /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/
  })

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

input.render();



const version = process.argv[2];
const PACKAGE_NAME = process.env.LERNA_PACKAGE_NAME;
const ROOT_PATH = process.env.LERNA_ROOT_PATH;
const folderName = PACKAGE_NAME.replace('@ts-simple/', '');
const directory = path.join(ROOT_PATH, 'packages', folderName);
const readmeFile = path.join(directory, 'README.md');
const branch = `${PACKAGE_NAME}@${version}`;


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
  const updated = updateSection(readmeContent, update, matchesStart, matchesEnd, true);
  fs.writeFileSync(readmeFile, updated);
} catch (e) {
  console.log(e.message);
}


