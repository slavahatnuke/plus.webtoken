const CryptoJS = require("crypto-js");
const base64url = require("base64url");

module.exports = {
  sign: (data, secret = '') => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
    const encrypted = base64url.fromBase64(encryptedData);

    const hmacSHA1 = CryptoJS.HmacSHA1(encrypted, secret);
    const hmacSHA1Base64 = hmacSHA1.toString(CryptoJS.enc.Base64);

    const sign = base64url.encode(hmacSHA1Base64);

    return `${encrypted}.${sign}`;
  },
  verify: (token, secret = '') => {
    const [encrypted, sign] = ('' + token).split('.');

    if (encrypted && sign) {

      const hmacSHA1 = CryptoJS.HmacSHA1(encrypted, secret);
      const hmacSHA1Base64 = hmacSHA1.toString(CryptoJS.enc.Base64);

      const expectedSign = base64url.encode(hmacSHA1Base64);

      if (expectedSign === sign) {
        const bytes = CryptoJS.AES.decrypt(base64url.toBase64(encrypted), secret);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
    }
  }
};


