// let {sign, verify} = require('./index');
//
// let token = sign({hi: 'there'}, 'secret');
//
// console.log({token});
// console.log(verify(token, 'secret'));
//
// // { token: 'eyJoaSI6InRoZXJlIn0=.93147c75d4946f71507776f81f6f329d' }
// // { hi: 'there' }

var CryptoJS = require("crypto-js");

var data = [{id: 1}, {id: 2}]

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
console.log(ciphertext.toString());

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData);