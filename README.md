# plus.base64-token
The simplest BASE64 token `base64.md5`

```javascript
let {sign, verify} = require('plus.base64-token');

let token = sign({hi: 'there'}, 'secret');

console.log({token});
console.log(verify(token, 'secret'));

// { token: 'eyJoaSI6InRoZXJlIn0=.93147c75d4946f71507776f81f6f329d' }
// { hi: 'there' }

```

## ES5
```javascript
var {sign, verify} = require('plus.base64-token/es5');
// .....

```