/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { BaseController } from './baseController';
import { ApiResponse, RequestOptions} from '../core';
import { ExternalApiError } from '../errors/externalApiError';
import {
  CallRecordingMetadata,
  callRecordingMetadataSchema,
} from '../models/callRecordingMetadata';
import { CallState, callStateSchema } from '../models/callState';
import {
  ConferenceMemberState,
  conferenceMemberStateSchema,
} from '../models/conferenceMemberState';
import {
  ConferenceRecordingMetadata,
  conferenceRecordingMetadataSchema,
} from '../models/conferenceRecordingMetadata';
import {
  ConferenceState,
  conferenceStateSchema,
} from '../models/conferenceState';
import {
  CreateCallRequest,
  createCallRequestSchema,
} from '../models/createCallRequest';
import {
  CreateCallResponse,
  createCallResponseSchema,
} from '../models/createCallResponse';
import {
  ModifyCallRecordingRequest,
  modifyCallRecordingRequestSchema,
} from '../models/modifyCallRecordingRequest';
import {
  ModifyCallRequest,
  modifyCallRequestSchema,
} from '../models/modifyCallRequest';
import {
  ModifyConferenceRequest,
  modifyConferenceRequestSchema,
} from '../models/modifyConferenceRequest';
import {
  TranscribeRecordingRequest,
  transcribeRecordingRequestSchema,
} from '../models/transcribeRecordingRequest';
import {
  TranscriptionResponse,
  transcriptionResponseSchema,
} from '../models/transcriptionResponse';
import { array, number, optional, string, unknown } from '../schema';

export class ApiController extends BaseController {
  /**
   * Creates an outbound call.
   *
   * @param accountId
   * @param body
   * @return Response from the API call
   */
  async createCall(
    accountId: string,
    body: CreateCallRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCallResponse>> {
    const req = this.createRequest('POST');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, createCallRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(createCallResponseSchema, requestOptions);
  }

  /**
   * Returns near-realtime metadata about the specified call.
   *
   * @param accountId
   * @param callId
   * @return Response from the API call
   */
  async getCall(
    accountId: string,
    callId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallState>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(callStateSchema, requestOptions);
  }

  /**
   * Interrupts and replaces an active call's BXML document.
   *
   * @param accountId
   * @param callId
   * @param body
   * @return Response from the API call
   */
  async modifyCall(
    accountId: string,
    callId: string,
    body: ModifyCallRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      body: [body, modifyCallRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Pauses or resumes a recording.
   *
   * @param accountId
   * @param callId
   * @param body
   * @return Response from the API call
   */
  async modifyCallRecordingState(
    accountId: string,
    callId: string,
    body: ModifyCallRecordingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      body: [body, modifyCallRecordingRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recording`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Returns a (potentially empty) list of metadata for the recordings that took place during the
   * specified call
   *
   * @param accountId
   * @param callId
   * @return Response from the API call
   */
  async getCallRecordings(
    accountId: string,
    callId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallRecordingMetadata[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(array(callRecordingMetadataSchema), requestOptions);
  }

  /**
   * Returns metadata for the specified recording.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async getCallRecording(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallRecordingMetadata>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(callRecordingMetadataSchema, requestOptions);
  }

  /**
   * Deletes the specified recording.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async deleteRecording(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Downloads the specified recording.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async getDownloadCallRecording(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}/media`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsText(requestOptions);
  }

  /**
   * Deletes the specified recording's media.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async deleteRecordingMedia(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}/media`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Downloads the specified transcription.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async getCallTranscription(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TranscriptionResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}/transcription`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(transcriptionResponseSchema, requestOptions);
  }

  /**
   * Requests that the specified recording be transcribed.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @param body
   * @return Response from the API call
   */
  async createTranscribeCallRecording(
    accountId: string,
    callId: string,
    recordingId: string,
    body: TranscribeRecordingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
      body: [body, transcribeRecordingRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}/transcription`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(410, ExternalApiError, 'The media for this recording has been deleted, so we can\'t transcribe it');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Deletes the specified recording's transcription.
   *
   * @param accountId
   * @param callId
   * @param recordingId
   * @return Response from the API call
   */
  async deleteCallTranscription(
    accountId: string,
    callId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      callId: [callId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/calls/${mapped.callId}/recordings/${mapped.recordingId}/transcription`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Returns information about the conferences in the account.
   *
   * @param accountId
   * @param name
   * @param minCreatedTime
   * @param maxCreatedTime
   * @param pageSize       Example: 1000
   * @param pageToken
   * @return Response from the API call
   */
  async getConferences(
    accountId: string,
    name?: string,
    minCreatedTime?: string,
    maxCreatedTime?: string,
    pageSize?: number,
    pageToken?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConferenceState[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      name: [name, optional(string())],
      minCreatedTime: [minCreatedTime, optional(string())],
      maxCreatedTime: [maxCreatedTime, optional(string())],
      pageSize: [pageSize, optional(number())],
      pageToken: [pageToken, optional(string())],
    });
    req.query('name', mapped.name);
    req.query('minCreatedTime', mapped.minCreatedTime);
    req.query('maxCreatedTime', mapped.maxCreatedTime);
    req.query('pageSize', mapped.pageSize);
    req.query('pageToken', mapped.pageToken);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(array(conferenceStateSchema), requestOptions);
  }

  /**
   * Returns information about the specified conference.
   *
   * @param accountId
   * @param conferenceId
   * @return Response from the API call
   */
  async getConference(
    accountId: string,
    conferenceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConferenceState>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(conferenceStateSchema, requestOptions);
  }

  /**
   * Modify the conference state.
   *
   * @param accountId
   * @param conferenceId
   * @param body
   * @return Response from the API call
   */
  async modifyConference(
    accountId: string,
    conferenceId: string,
    body: ModifyConferenceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
      body: [body, modifyConferenceRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Updates settings for a particular conference member.
   *
   * @param accountId
   * @param conferenceId
   * @param callId
   * @param body
   * @return Response from the API call
   */
  async modifyConferenceMember(
    accountId: string,
    conferenceId: string,
    callId: string,
    body: ConferenceMemberState,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
      callId: [callId, string()],
      body: [body, conferenceMemberStateSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}/members/${mapped.callId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.call(requestOptions);
  }

  /**
   * Returns information about the specified conference member.
   *
   * @param accountId
   * @param conferenceId
   * @param memberId
   * @return Response from the API call
   */
  async getConferenceMember(
    accountId: string,
    conferenceId: string,
    memberId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConferenceMemberState>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
      memberId: [memberId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}/members/${mapped.memberId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(conferenceMemberStateSchema, requestOptions);
  }

  /**
   * Returns a (potentially empty) list of metadata for the recordings that took place during the
   * specified conference
   *
   * @param accountId
   * @param conferenceId
   * @return Response from the API call
   */
  async getConferenceRecordings(
    accountId: string,
    conferenceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConferenceRecordingMetadata[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}/recordings`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(
      array(conferenceRecordingMetadataSchema),
      requestOptions
    );
  }

  /**
   * Returns metadata for the specified recording.
   *
   * @param accountId
   * @param conferenceId
   * @param recordingId
   * @return Response from the API call
   */
  async getConferenceRecording(
    accountId: string,
    conferenceId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallRecordingMetadata>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}/recordings/${mapped.recordingId}`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(callRecordingMetadataSchema, requestOptions);
  }

  /**
   * Downloads the specified recording.
   *
   * @param accountId
   * @param conferenceId
   * @param recordingId
   * @return Response from the API call
   */
  async getDownloadConferenceRecording(
    accountId: string,
    conferenceId: string,
    recordingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      conferenceId: [conferenceId, string()],
      recordingId: [recordingId, string()],
    });
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/conferences/${mapped.conferenceId}/recordings/${mapped.recordingId}/media`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsText(requestOptions);
  }

  /**
   * Returns a list of metadata for the recordings associated with the specified account. The list can be
   * filtered by the optional from, to, minStartTime, and maxStartTime arguments. The list is capped at
   * 1000 entries and may be empty if no recordings match the specified criteria.
   *
   * @param accountId
   * @param from
   * @param to
   * @param minStartTime
   * @param maxStartTime
   * @return Response from the API call
   */
  async getQueryCallRecordings(
    accountId: string,
    from?: string,
    to?: string,
    minStartTime?: string,
    maxStartTime?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallRecordingMetadata[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('VoiceDefault');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      from: [from, optional(string())],
      to: [to, optional(string())],
      minStartTime: [minStartTime, optional(string())],
      maxStartTime: [maxStartTime, optional(string())],
    });
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.query('minStartTime', mapped.minStartTime);
    req.query('maxStartTime', mapped.maxStartTime);
    req.appendTemplatePath`/api/v2/accounts/${mapped.accountId}/recordings`;
    req.throwOn(400, ExternalApiError, 'Something\'s not quite right... Your request is invalid. Please fix it before trying again.');
    req.throwOn(401, ApiError, 'Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API.');
    req.throwOn(403, ExternalApiError, 'User unauthorized to perform this action.');
    req.throwOn(404, ExternalApiError, 'The resource specified cannot be found or does not belong to you.');
    req.throwOn(415, ExternalApiError, 'We don\'t support that media type. If a request body is required, please send it to us as `application/json`.');
    req.throwOn(429, ExternalApiError, 'You\'re sending requests to this endpoint too frequently. Please slow your request rate down and try again.');
    req.throwOn(500, ExternalApiError, 'Something unexpected happened. Please try again.');
    return req.callAsJson(array(callRecordingMetadataSchema), requestOptions);
  }
}
