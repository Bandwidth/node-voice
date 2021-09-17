/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CallbackMethodEnum,
  callbackMethodEnumSchema,
} from './callbackMethodEnum';
import {
  FallbackMethodEnum,
  fallbackMethodEnumSchema,
} from './fallbackMethodEnum';
import { ModeEnum, modeEnumSchema } from './modeEnum';

export interface MachineDetectionRequest {
  /** The machine detection mode. If set to 'async', the detection result will be sent in a 'machineDetectionComplete' callback. If set to 'sync', the 'answer' callback will wait for the machine detection to complete and will include its result. Default is 'async'. */
  mode?: ModeEnum;
  /** Total amount of time (in seconds) before giving up. */
  detectionTimeout?: number;
  /** If no speech is detected in this period, a callback with a 'silence' result is sent. Default is 10 seconds. */
  silenceTimeout?: number;
  /** When speech has ended and a result couldn't be determined based on the audio content itself, this value is used to determine if the speaker is a machine based on the speech duration. If the length of the speech detected is greater than or equal to this threshold, the result will be 'answering-machine'. If the length of speech detected is below this threshold, the result will be 'human'. Default is 10 seconds. */
  speechThreshold?: number;
  /** Amount of silence (in seconds) before assuming the callee has finished speaking. */
  speechEndThreshold?: number;
  /** If set to 'true' and if an answering machine is detected, the 'answering-machine' callback will be delayed until the machine is done speaking or until the 'detectionTimeout' is exceeded. If false, the 'answering-machine' result is sent immediately. Default is 'false'. */
  delayResult?: boolean;
  /** The URL to send the 'machineDetectionComplete' callback when the detection is completed. Only for 'async' mode. */
  callbackUrl?: string | null;
  callbackMethod?: CallbackMethodEnum | null;
  fallbackUrl?: string | null;
  fallbackMethod?: FallbackMethodEnum | null;
  username?: string | null;
  password?: string | null;
  fallbackUsername?: string | null;
  fallbackPassword?: string | null;
}

export const machineDetectionRequestSchema: Schema<MachineDetectionRequest> = object(
  {
    mode: ['mode', optional(modeEnumSchema)],
    detectionTimeout: ['detectionTimeout', optional(number())],
    silenceTimeout: ['silenceTimeout', optional(number())],
    speechThreshold: ['speechThreshold', optional(number())],
    speechEndThreshold: ['speechEndThreshold', optional(number())],
    delayResult: ['delayResult', optional(boolean())],
    callbackUrl: ['callbackUrl', optional(nullable(string()))],
    callbackMethod: [
      'callbackMethod',
      optional(nullable(callbackMethodEnumSchema)),
    ],
    fallbackUrl: ['fallbackUrl', optional(nullable(string()))],
    fallbackMethod: [
      'fallbackMethod',
      optional(nullable(fallbackMethodEnumSchema)),
    ],
    username: ['username', optional(nullable(string()))],
    password: ['password', optional(nullable(string()))],
    fallbackUsername: ['fallbackUsername', optional(nullable(string()))],
    fallbackPassword: ['fallbackPassword', optional(nullable(string()))],
  }
);
