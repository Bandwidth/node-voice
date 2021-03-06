/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  RedirectFallbackMethodEnum,
  redirectFallbackMethodEnumSchema,
} from './redirectFallbackMethodEnum';
import {
  RedirectMethodEnum,
  redirectMethodEnumSchema,
} from './redirectMethodEnum';
import { State1Enum, state1EnumSchema } from './state1Enum';

export interface ApiModifyCallRequest {
  state?: State1Enum;
  redirectUrl: string;
  redirectFallbackUrl?: string;
  redirectMethod?: RedirectMethodEnum;
  redirectFallbackMethod?: RedirectFallbackMethodEnum;
  username?: string;
  password?: string;
  fallbackUsername?: string;
  fallbackPassword?: string;
  tag?: string;
}

export const apiModifyCallRequestSchema: Schema<ApiModifyCallRequest> = object({
  state: ['state', optional(state1EnumSchema)],
  redirectUrl: ['redirectUrl', string()],
  redirectFallbackUrl: ['redirectFallbackUrl', optional(string())],
  redirectMethod: ['redirectMethod', optional(redirectMethodEnumSchema)],
  redirectFallbackMethod: [
    'redirectFallbackMethod',
    optional(redirectFallbackMethodEnumSchema),
  ],
  username: ['username', optional(string())],
  password: ['password', optional(string())],
  fallbackUsername: ['fallbackUsername', optional(string())],
  fallbackPassword: ['fallbackPassword', optional(string())],
  tag: ['tag', optional(string())],
});
