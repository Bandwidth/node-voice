/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import {
  AnswerFallbackMethodEnum,
  answerFallbackMethodEnumSchema,
} from './answerFallbackMethodEnum';
import { AnswerMethodEnum, answerMethodEnumSchema } from './answerMethodEnum';
import {
  DisconnectMethodEnum,
  disconnectMethodEnumSchema,
} from './disconnectMethodEnum';

export interface ApiCreateCallRequest {
  /** Format is E164 */
  from: string;
  /** Format is E164 */
  to: string;
  callTimeout?: number;
  callbackTimeout?: number;
  answerUrl: string;
  answerFallbackUrl?: string;
  username?: string;
  password?: string;
  fallbackUsername?: string;
  fallbackPassword?: string;
  answerMethod?: AnswerMethodEnum;
  answerFallbackMethod?: AnswerFallbackMethodEnum;
  disconnectUrl?: string;
  disconnectMethod?: DisconnectMethodEnum;
  tag?: string;
  applicationId: string;
  obfuscatedTo?: string;
  obfuscatedFrom?: string;
}

export const apiCreateCallRequestSchema: Schema<ApiCreateCallRequest> = object({
  from: ['from', string()],
  to: ['to', string()],
  callTimeout: ['callTimeout', optional(number())],
  callbackTimeout: ['callbackTimeout', optional(number())],
  answerUrl: ['answerUrl', string()],
  answerFallbackUrl: ['answerFallbackUrl', optional(string())],
  username: ['username', optional(string())],
  password: ['password', optional(string())],
  fallbackUsername: ['fallbackUsername', optional(string())],
  fallbackPassword: ['fallbackPassword', optional(string())],
  answerMethod: ['answerMethod', optional(answerMethodEnumSchema)],
  answerFallbackMethod: [
    'answerFallbackMethod',
    optional(answerFallbackMethodEnumSchema),
  ],
  disconnectUrl: ['disconnectUrl', optional(string())],
  disconnectMethod: ['disconnectMethod', optional(disconnectMethodEnumSchema)],
  tag: ['tag', optional(string())],
  applicationId: ['applicationId', string()],
  obfuscatedTo: ['obfuscatedTo', optional(string())],
  obfuscatedFrom: ['obfuscatedFrom', optional(string())],
});
