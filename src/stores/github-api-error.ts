import { writable } from 'svelte/store';
import type { Writable, Subscriber, Unsubscriber } from 'svelte/store';

import type { ApiErrorHandler, ApiError } from '@data';

class GithubApiErrorStore implements ApiErrorHandler {
  #store: Writable<string> = null;

  constructor() {
    this.#store = writable(null);
  }

  handle(error: ApiError) {
    const responseMessage = error.response?.data?.message;
    this.#store.set(responseMessage ?? error.message);
  }

  subscribe(run: Subscriber<string>): Unsubscriber {
    return this.#store.subscribe(run);
  }
}

export default new GithubApiErrorStore();
