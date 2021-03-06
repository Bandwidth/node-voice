/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  DisconnectCauseEnum,
  disconnectCauseEnumSchema,
} from './disconnectCauseEnum';
import { StateEnum, stateEnumSchema } from './stateEnum';

export interface ApiCallStateResponse {
  callId?: string;
  parentCallId?: string;
  applicationId?: string;
  accountId?: string;
  to?: string;
  from?: string;
  direction?: string;
  state?: StateEnum;
  startTime?: string;
  answerTime?: string;
  endTime?: string;
  disconnectCause?: DisconnectCauseEnum;
  errorMessage?: string;
  errorId?: string;
  lastUpdate?: string;
}

export const apiCallStateResponseSchema: Schema<ApiCallStateResponse> = object({
  callId: ['callId', optional(string())],
  parentCallId: ['parentCallId', optional(string())],
  applicationId: ['applicationId', optional(string())],
  accountId: ['accountId', optional(string())],
  to: ['to', optional(string())],
  from: ['from', optional(string())],
  direction: ['direction', optional(string())],
  state: ['state', optional(stateEnumSchema)],
  startTime: ['startTime', optional(string())],
  answerTime: ['answerTime', optional(string())],
  endTime: ['endTime', optional(string())],
  disconnectCause: ['disconnectCause', optional(disconnectCauseEnumSchema)],
  errorMessage: ['errorMessage', optional(string())],
  errorId: ['errorId', optional(string())],
  lastUpdate: ['lastUpdate', optional(string())],
});
