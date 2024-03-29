/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ModeEnum
 */
export enum ModeEnum {
  Sync = 'sync',
  Async = 'async',
}

/**
 * Schema for ModeEnum
 */
export const modeEnumSchema: Schema<ModeEnum> = stringEnum(ModeEnum);
