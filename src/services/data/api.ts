import axios from 'axios';
import type { AxiosInstance, Method } from 'axios';

import type { ApiErrorHandler, ApiConfig, RequestConfig } from './api.d';

class DefaultRequestConfig implements RequestConfig {
  useGlobalErrorHandler?: boolean = true;
}

export class Api {
  private readonly axios: AxiosInstance;
  private readonly errorHandler: ApiErrorHandler;

  constructor(axiosConfig: ApiConfig) {
    this.axios = axios.create(axiosConfig);
    this.errorHandler = axiosConfig.errorHandler;
  }

  get(path, config?: RequestConfig) {
    return this.#request('GET', path, config);
  }

  post(path, config?: RequestConfig) {
    return this.#request('POST', path, config);
  }

  put(path, config?: RequestConfig) {
    return this.#request('PUT', path, config);
  }

  delete(path, config?: RequestConfig) {
    return this.#request('DELETE', path, config);
  }

  async #request(method: Method, path: string, config?: RequestConfig) {
    const actualConfig = { ...new DefaultRequestConfig(), ...config };

    try {
      return await this.axios.request({
        method,
        url: path,
        ...actualConfig,
      });
    } catch (error) {
      if (actualConfig.useGlobalErrorHandler) {
        this.errorHandler.handle(error);
      } else {
        throw error;
      }
    }
  }
}
