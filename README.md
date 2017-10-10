# plus.webtoken
The simplest crypto-js (AES / HmacSHA1)based token

```javascript
let {encrypt, decrypt} = require('plus.webtoken');

let token = encrypt({hi: 'there'}, 'secret');

console.log({token});
console.log(decrypt(token, 'secret'));

// { token: 'U2FsdGVkX1_TgoWMyNuyi3RXpFEGRwfvoEI4X6uOC8c.clRSSERXZFNwOGJFeFNGSVNsYnhZS0ZHLzZBPQ' }
// { hi: 'there' }

```

## ES5
```javascript
var {encrypt, decrypt} = require('plus.webtoken/es5');
// .....

```

## CLI
```

Web Token
> plus.webtoken encrypt path/to/file.json secret
> plus.webtoken decrypt token secret

```