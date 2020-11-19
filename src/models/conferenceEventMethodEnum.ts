/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ConferenceEventMethodEnum
 */
export enum ConferenceEventMethodEnum {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
}

/**
 * Schema for ConferenceEventMethodEnum
 */
export const conferenceEventMethodEnumSchema: Schema<ConferenceEventMethodEnum> = stringEnum(ConferenceEventMethodEnum);
