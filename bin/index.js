#!/usr/bin/env node

const path = require('path');

const args = process.argv.slice(2);
const {sign, verify} = require('../index');

let [type] = args;

if(type) {
  if(type === 'sign') {
    let [type, configFile, secret] = args;
    const configPath = path.isAbsolute(configFile) ? configFile : process.cwd() + '/' + configFile;
    console.log(sign(require(path.normalize(configPath)), secret || ''));
  } else if( type === 'verify' ) {
    let [type, token, secret] = args;
    console.log(verify(token, secret || ''))
  } else {
    console.log('Not supported');
  }

} else {
  console.log('');
  console.log('Base64 Token');
  console.log('> plus.base64-token sign path/to/file.json secret');
  console.log('> plus.base64-token verify token secret');
  console.log('');
}
