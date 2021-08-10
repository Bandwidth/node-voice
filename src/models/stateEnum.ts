/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StateEnum
 */
export enum StateEnum {
  Active = 'active',
  Completed = 'completed',
}

/**
 * Schema for StateEnum
 */
export const stateEnumSchema: Schema<StateEnum> = stringEnum(StateEnum);
