let {encrypt, decrypt} = require('./index');

let token = encrypt({hi: 'there'}, 'secret');

console.log({token});
console.log(decrypt(token, 'secret'));
