import type { RequestConfig } from './api.d';
import { Api } from './api';
import { GithubApiErrorStore } from '@stores';

const USERNAME = 'bagnascojhoel';
const DESCRIPTION_FILE = 'this-is-jhoel.json';

const api = new Api({
  errorHandler: GithubApiErrorStore,
  baseURL: 'https://api.github.com',
  auth: {
    username: USERNAME,
    password: process.env.GITHUB_PERSONAL_TOKEN,
  },
});

export async function findMyPublicRepositories(params?: { perPage: number }) {
  const { perPage } = params ?? {};
  const _perPage = perPage ?? 50;

  return api.get(
    `/users/${USERNAME}/repos?per_page=${_perPage}&sort=pushed&direction=desc`
  );
}

export async function findMyRepositoryDescription(
  repo: string,
  config?: RequestConfig
) {
  return api.get(
    `/repos/${USERNAME}/${repo}/contents/${DESCRIPTION_FILE}`,
    config
  );
}
