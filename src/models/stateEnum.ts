/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StateEnum
 */
export enum StateEnum {
  Disconnected = 'disconnected',
  Answered = 'answered',
  Initiated = 'initiated',
}

/**
 * Schema for StateEnum
 */
export const stateEnumSchema: Schema<StateEnum> = stringEnum(StateEnum);
