// @ts-check
const readlineSync = require('readline-sync');
const Project = require("@lerna/project");
const PackageGraph = require("@lerna/package-graph");
const collectUpdates = require("@lerna/collect-updates");
const path = require('path');
const os = require('os');
const fs = require('fs');
const updateSection = require('update-section');

async function main() {
  const cwd = process.cwd();
  const project = new Project(cwd);
  const pkgs = await project.getPackages();
  const graph = new PackageGraph(pkgs);
  const opts = {
    bump: "",
    canary: false,
    forcePublish: false,
    ignoreChanges: [],
    includeMergedTags: false,
    since: null,
  };
  const changed = collectUpdates(pkgs, graph, { cwd }, opts);
  changed.forEach(node => {
    const readmeFile = path.join(project.packageParentDirs[0], node.name.replace('@ts-simple/', ''), 'README.md');
    const updateVersion = readlineSync.question(`${node.name} => Current version: ${node.version}. New version: `);
    const updateReadme = getBadges(node.name, updateVersion);

    try {
      const readmeContent = fs.readFileSync(readmeFile, 'utf-8');
      const updated = updateSection(readmeContent, updateReadme, matchesStart, matchesEnd, true);
      fs.writeFileSync(readmeFile, updated);
    } catch (e) {
      console.log(e.message);
    }

  });
}

function getBadges(name, version) {
  const branch = `${name}@${version}`;

  let coverallsString =
    `[![Coverage Status](https://coveralls.io/repos/github/silvelo/ts-simple/badge.svg?branch=${branch})](https://coveralls.io/github/silvelo/ts-simple?branch=${branch})`

  let travisString =
    `[![Build Status](https://travis-ci.org/silvelo/ts-simple.svg?branch=${branch})](https://travis-ci.org/silvelo/ts-simple?branch=${branch})`
  
  return `<!-- START SHIELD -->${os.EOL}${travisString}${os.EOL}${coverallsString}${os.EOL}<!-- END SHIELD -->`;
}



function matchesStart(line) {
  return (/<!-- START SHIELD -->/).test(line);
}

function matchesEnd(line) {
  return (/<!-- END SHIELD -->/).test(line);
}


main();
