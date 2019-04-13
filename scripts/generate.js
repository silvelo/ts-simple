//@ts-check

const path = require('path');
const replace = require('replace-in-file');
const shields = require('shields')();
const os = require('os');
const folderName = process.env.LERNA_PACKAGE_NAME.replace('@ts-simple/', '');
const directory = path.join(process.env.LERNA_ROOT_PATH, 'packages', folderName);
const packageJson = path.join(directory, 'package.json');
const readmeFile = path.join(directory, 'README.md');
const package = require(packageJson);

package.version;

const shielderOptions = {
  branch: `${package.name}@${package.version}`,
  repo: 'silvelo/ts-simple'
}

const badges = [shields('travis', shielderOptions), shields('coveralls', shielderOptions)];

const data = badges.map(badge => `[![${badge.text}](${badge.image})](${badge.link})`).join(os.EOL);


const replaceOptions = {
  files: readmeFile,
  from: '<!-- Shield Tag -->',
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