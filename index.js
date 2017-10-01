const base64 = require('base-64');
const md5 = require('js-md5');

module.exports = {
  sign: (data, secret = '') => {
    const encodedData = base64.encode(JSON.stringify(data));
    return `${encodedData}.${md5(secret + encodedData)}`;
  },
  verify: (token, secret = '') => {
    const [data, hash] = ('' + token).split('.');

    if (data && hash) {
      if (md5(secret + data) === hash) {
        try {
          return JSON.parse(base64.decode(data));
        } catch (e) {
        }
      }
    }
  }
};


