#!/usr/bin/env node

const path = require('path');

const args = process.argv.slice(2);
const {encrypt, decrypt} = require('../index');

let [type] = args;

if (type) {
  if (type === 'encrypt') {
    let [type, configFile, secret] = args;
    const configPath = path.isAbsolute(configFile) ? configFile : process.cwd() + '/' + configFile;
    console.log(encrypt(require(path.normalize(configPath)), secret || ''));
  } else if (type === 'decrypt') {
    let [type, token, secret] = args;
    console.log(decrypt(token, secret || ''))
  } else {
    console.log('Not supported');
  }
} else {
  console.log('');
  console.log('Web Token');
  console.log('> plus.webtoken encrypt path/to/file.json secret');
  console.log('> plus.webtoken decrypt token secret');
  console.log('');
}
