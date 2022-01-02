import { Api } from './api';
import { GithubApiErrorStore } from '@stores';

const api = new Api({
  errorHandler: GithubApiErrorStore,
  baseURL: process.env.GITHUB_URL,
  auth: {
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PERSONAL_TOKEN,
  },
});

export async function findMyData() {
  return await api.get('/user');
}
