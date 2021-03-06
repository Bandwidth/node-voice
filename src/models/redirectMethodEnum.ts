/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RedirectMethodEnum
 */
export enum RedirectMethodEnum {
  POST = 'POST',
  GET = 'GET',
}

/**
 * Schema for RedirectMethodEnum
 */
export const redirectMethodEnumSchema: Schema<RedirectMethodEnum> = stringEnum(RedirectMethodEnum);
