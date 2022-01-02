import type { AxiosError, AxiosRequestConfig } from 'axios';

export interface ApiError extends AxiosError {}

export interface ApiErrorHandler {
  handle(error: ApiError);
}

export interface RequestConfig extends AxiosRequestConfig {
  useGlobalErrorHandler?: boolean;
  isReturnOnlyData?: boolean;
}

export interface ApiConfig extends AxiosRequestConfig {
  errorHandler?: ApiErrorHandler;
}
