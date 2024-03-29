/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CallbackMethodEnum
 */
export enum CallbackMethodEnum {
  POST = 'POST',
  GET = 'GET',
}

/**
 * Schema for CallbackMethodEnum
 */
export const callbackMethodEnumSchema: Schema<CallbackMethodEnum> = stringEnum(CallbackMethodEnum);
