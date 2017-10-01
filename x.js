let {sign, verify} = require('./index');

let token = sign({hi: 'there'}, 'secret');

console.log({token});
console.log(verify(token, 'secret'));

// { token: 'eyJoaSI6InRoZXJlIn0=.93147c75d4946f71507776f81f6f329d' }
// { hi: 'there' }
