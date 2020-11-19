/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DisconnectCauseEnum
 */
export enum DisconnectCauseEnum {
  Busy = 'busy',
  Callbackerror = 'callback-error',
  Cancel = 'cancel',
  Error = 'error',
  Hangup = 'hangup',
  Invalidbxml = 'invalid-bxml',
  Rejected = 'rejected',
  Timeout = 'timeout',
  Accountlimit = 'account-limit',
  Nodecapacityexceeded = 'node-capacity-exceeded',
  Unknown = 'unknown',
  Applicationerror = 'application-error',
}

/**
 * Schema for DisconnectCauseEnum
 */
export const disconnectCauseEnumSchema: Schema<DisconnectCauseEnum> = stringEnum(DisconnectCauseEnum);
