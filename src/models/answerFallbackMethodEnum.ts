/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AnswerFallbackMethodEnum
 */
export enum AnswerFallbackMethodEnum {
  POST = 'POST',
  GET = 'GET',
}

/**
 * Schema for AnswerFallbackMethodEnum
 */
export const answerFallbackMethodEnumSchema: Schema<AnswerFallbackMethodEnum> = stringEnum(AnswerFallbackMethodEnum);
