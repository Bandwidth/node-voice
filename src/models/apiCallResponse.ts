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

export interface ApiCallResponse {
  accountId: string;
  callId: string;
  applicationId: string;
  to: string;
  from: string;
  startTime?: string;
  callUrl: string;
  callTimeout?: number;
  callbackTimeout?: number;
  answerUrl: string;
  answerMethod: AnswerMethodEnum;
  answerFallbackUrl?: string;
  answerFallbackMethod?: AnswerFallbackMethodEnum;
  disconnectUrl?: string;
  disconnectMethod: DisconnectMethodEnum;
  username?: string;
  password?: string;
  fallbackUsername?: string;
  fallbackPassword?: string;
  tag?: string;
}

export const apiCallResponseSchema: Schema<ApiCallResponse> = object({
  accountId: ['accountId', string()],
  callId: ['callId', string()],
  applicationId: ['applicationId', string()],
  to: ['to', string()],
  from: ['from', string()],
  startTime: ['startTime', optional(string())],
  callUrl: ['callUrl', string()],
  callTimeout: ['callTimeout', optional(number())],
  callbackTimeout: ['callbackTimeout', optional(number())],
  answerUrl: ['answerUrl', string()],
  answerMethod: ['answerMethod', answerMethodEnumSchema],
  answerFallbackUrl: ['answerFallbackUrl', optional(string())],
  answerFallbackMethod: [
    'answerFallbackMethod',
    optional(answerFallbackMethodEnumSchema),
  ],
  disconnectUrl: ['disconnectUrl', optional(string())],
  disconnectMethod: ['disconnectMethod', disconnectMethodEnumSchema],
  username: ['username', optional(string())],
  password: ['password', optional(string())],
  fallbackUsername: ['fallbackUsername', optional(string())],
  fallbackPassword: ['fallbackPassword', optional(string())],
  tag: ['tag', optional(string())],
});
