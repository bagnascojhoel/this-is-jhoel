const axios = require('axios');

const api = axios.create({
  headers: {
    authorization: `bagnascojhoel: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`,
  },
  baseURL: 'https://api.github.com',
});

export function* findMyData() {
  yield api.get('/user');
}
