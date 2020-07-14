const path = require('path');
const fs = require('smart-fs');

const snakeToCamel = (str) => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
    .replace('-', '')
    .replace('_', '')
);

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const dir = fs.opendirSync('.');
let dirent;
// eslint-disable-next-line no-cond-assign
while ((dirent = dir.readSync()) !== null) {
  const filePath = path.join('./', dirent.name);
  const prefix = capitalize(snakeToCamel(dirent.name));
  // console.log(prefix);
  const files = fs.walkDir(filePath).sort();
  // console.log(files);
  files.forEach((f) => {
    const currFilename = `${filePath}/${f}`;
    const newFilename = `${filePath}/handler${prefix}${capitalize(f)}`;
    // console.log(currFilename);
    // console.log(newFilename);
    fs.rename(currFilename, newFilename, (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log('renamed ok');
      }
    });
  });
}
dir.closeSync();
