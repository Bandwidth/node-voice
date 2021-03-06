/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Transcript, transcriptSchema } from './transcript';

export interface TranscriptionResponse {
  transcripts?: Transcript[];
}

export const transcriptionResponseSchema: Schema<TranscriptionResponse> = object(
  {
    transcripts: ['transcripts', optional(array(lazy(() => transcriptSchema)))],
  }
);
