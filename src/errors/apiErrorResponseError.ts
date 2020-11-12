/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiError } from './apiError';

/**
 * Creates an instance of ApiErrorResponse
 */
interface ApiErrorResponse {
  type?: string;
  description?: string;
  id?: string;
}

export class ApiErrorResponseError extends ApiError<ApiErrorResponse> {}
