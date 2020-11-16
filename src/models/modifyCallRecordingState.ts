/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { State2Enum, state2EnumSchema } from './state2Enum';

export interface ModifyCallRecordingState {
  state?: State2Enum;
}

export const modifyCallRecordingStateSchema: Schema<ModifyCallRecordingState> = object(
  { state: ['state', optional(state2EnumSchema)] }
);