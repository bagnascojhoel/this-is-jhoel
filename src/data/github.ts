import type { RequestConfig } from './api.d';
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

export async function findMyRepositories({ visibility }) {
  const options = visibility && `visibility=${visibility}`;

  return api.get(`/user/repos?${options}`);
}

export async function findRepositoryDescription(
  owner: string,
  repo: string,
  config?: RequestConfig
) {
  return api.get(`/repos/${owner}/${repo}/contents/this-is-jhoel.json`, config);
}
