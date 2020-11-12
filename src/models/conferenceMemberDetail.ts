/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface ConferenceMemberDetail {
  callId?: string;
  conferenceId?: string;
  memberUrl?: string;
  mute?: boolean;
  hold?: boolean;
  callIdsToCoach?: string[];
}

export const conferenceMemberDetailSchema: Schema<ConferenceMemberDetail> = object(
  {
    callId: ['callId', optional(string())],
    conferenceId: ['conferenceId', optional(string())],
    memberUrl: ['memberUrl', optional(string())],
    mute: ['mute', optional(boolean())],
    hold: ['hold', optional(boolean())],
    callIdsToCoach: ['callIdsToCoach', optional(array(string()))],
  }
);
