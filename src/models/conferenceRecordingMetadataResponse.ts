/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { FileFormatEnum, fileFormatEnumSchema } from './fileFormatEnum';
import { Status1Enum, status1EnumSchema } from './status1Enum';

export interface ConferenceRecordingMetadataResponse {
  accountId?: string;
  conferenceId?: string;
  name?: string;
  recordingId?: string;
  /** Format is ISO-8601 */
  duration?: string;
  channels?: number;
  startTime?: string;
  endTime?: string;
  fileFormat?: FileFormatEnum;
  status?: Status1Enum;
  mediaUrl?: string;
}

export const conferenceRecordingMetadataResponseSchema: Schema<ConferenceRecordingMetadataResponse> = object(
  {
    accountId: ['accountId', optional(string())],
    conferenceId: ['conferenceId', optional(string())],
    name: ['name', optional(string())],
    recordingId: ['recordingId', optional(string())],
    duration: ['duration', optional(string())],
    channels: ['channels', optional(number())],
    startTime: ['startTime', optional(string())],
    endTime: ['endTime', optional(string())],
    fileFormat: ['fileFormat', optional(fileFormatEnumSchema)],
    status: ['status', optional(status1EnumSchema)],
    mediaUrl: ['mediaUrl', optional(string())],
  }
);
