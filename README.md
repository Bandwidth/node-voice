# Getting Started with Voice

Note: As of version 2.0.0, this package has been upgraded to Typescript

## Getting Started

### Introduction

Bandwidth's HTTP voice platform

### Installation

The following section explains how to use the bandwidthLib library in a new project.

### Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

#### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| custom | - |

### Initialize the API Client

The following parameters are configurable for the API Client.

| Parameter | Type | Description |
|  --- | --- | --- |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

The API client can be initialized as following.

```ts
const client = new Client({

  environment: Environment.Production
})
```

### Authorization

This API uses `Basic Authentication`.

## Client Class Documentation

### VoiceClient

Gateway for the SDK. This class acts as a factory for Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| aPI | Provides access to APIController |

## API Reference

### List of APIs

* [API](#api)

### API

#### Create Call

Creates an outbound call

```ts
async createCall(
  accountId: string,
  body?: ApiCreateCallRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiCallResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `body` | [`ApiCreateCallRequest`](#api-create-call-request) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ApiCallResponse`](#api-call-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const body: ApiCreateCallRequest = {
  from: '+15558675309',
  to: '+15555555555',
  answerUrl: 'answerUrl4',
  applicationId: 'applicationId6',
};

try {
  const { result, ...httpResponse } = await aPIController.createCall(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Call State

Returns near-realtime metadata about the specified call

```ts
async getCallState(
  accountId: string,
  callId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiCallStateResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ApiCallStateResponse`](#api-call-state-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
try {
  const { result, ...httpResponse } = await aPIController.getCallState(accountId, callId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Modify Call

Interrupts and replaces an active call's BXML document

```ts
async modifyCall(
  accountId: string,
  callId: string,
  body?: ApiModifyCallRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `body` | [`ApiModifyCallRequest`](#api-modify-call-request) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
try {
  const { result, ...httpResponse } = await aPIController.modifyCall(accountId, callId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Modify Call Recording State

Pauses or resumes a recording

```ts
async modifyCallRecordingState(
  accountId: string,
  callId: string,
  body?: ModifyCallRecordingState,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `body` | [`ModifyCallRecordingState`](#modify-call-recording-state-1) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
try {
  const { result, ...httpResponse } = await aPIController.modifyCallRecordingState(accountId, callId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Query Metadata for Account and Call

Returns a (potentially empty) list of metadata for the recordings that took place during the specified call

```ts
async getQueryMetadataForAccountAndCall(
  accountId: string,
  callId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecordingMetadataResponse[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`RecordingMetadataResponse[]`](#recording-metadata-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
try {
  const { result, ...httpResponse } = await aPIController.getQueryMetadataForAccountAndCall(accountId, callId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Metadata for Recording

Returns metadata for the specified recording

```ts
async getMetadataForRecording(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecordingMetadataResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`RecordingMetadataResponse`](#recording-metadata-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.getMetadataForRecording(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Delete Recording

Deletes the specified recording

```ts
async deleteRecording(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.deleteRecording(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Stream Recording Media

Downloads the specified recording

```ts
async getStreamRecordingMedia(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`NodeJS.ReadableStream | Blob`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.getStreamRecordingMedia(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Delete Recording Media

Deletes the specified recording's media

```ts
async deleteRecordingMedia(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.deleteRecordingMedia(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Recording Transcription

Downloads the specified transcription

```ts
async getRecordingTranscription(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TranscriptionResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`TranscriptionResponse`](#transcription-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.getRecordingTranscription(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Create Transcribe Recording

Requests that the specified recording be transcribed

```ts
async createTranscribeRecording(
  accountId: string,
  callId: string,
  recordingId: string,
  body?: ApiTranscribeRecordingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `body` | [`ApiTranscribeRecordingRequest`](#api-transcribe-recording-request) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.createTranscribeRecording(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 410 | The media for this recording has been deleted, so we can't transcribe it | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Delete Recording Transcription

Deletes the specified recording's transcription

```ts
async deleteRecordingTranscription(
  accountId: string,
  callId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const callId = 'callId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.deleteRecordingTranscription(accountId, callId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Conferences by Account

Returns information about the conferences in the account

```ts
async getConferencesByAccount(
  accountId: string,
  pageSize?: number,
  pageToken?: string,
  name?: string,
  minCreatedTime?: string,
  maxCreatedTime?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConferenceDetail[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `pageSize` | `number` | Query, Optional | - |
| `pageToken` | `string` | Query, Optional | - |
| `name` | `string` | Query, Optional | - |
| `minCreatedTime` | `string` | Query, Optional | - |
| `maxCreatedTime` | `string` | Query, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ConferenceDetail[]`](#conference-detail)

##### Example Usage

```ts
const accountId = 'accountId0';
try {
  const { result, ...httpResponse } = await aPIController.getConferencesByAccount(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Conference by Id

Returns information about the specified conference

```ts
async getConferenceById(
  accountId: string,
  conferenceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConferenceDetail>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ConferenceDetail`](#conference-detail)

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
try {
  const { result, ...httpResponse } = await aPIController.getConferenceById(accountId, conferenceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Modify Conference

Modify the conference state

```ts
async modifyConference(
  accountId: string,
  conferenceId: string,
  body?: CallEngineModifyConferenceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `body` | [`CallEngineModifyConferenceRequest`](#call-engine-modify-conference-request) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
try {
  const { result, ...httpResponse } = await aPIController.modifyConference(accountId, conferenceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Modify Conference Member

Updates settings for a particular conference member

```ts
async modifyConferenceMember(
  accountId: string,
  conferenceId: string,
  callId: string,
  body?: ConferenceMemberDetail,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `callId` | `string` | Template, Required | - |
| `body` | [`ConferenceMemberDetail`](#conference-member-detail) | Body, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
const callId = 'callId0';
try {
  const { result, ...httpResponse } = await aPIController.modifyConferenceMember(accountId, conferenceId, callId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Conference Member

Returns information about the specified conference member

```ts
async getConferenceMember(
  accountId: string,
  conferenceId: string,
  memberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConferenceMemberDetail>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `memberId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ConferenceMemberDetail`](#conference-member-detail)

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
const memberId = 'memberId0';
try {
  const { result, ...httpResponse } = await aPIController.getConferenceMember(accountId, conferenceId, memberId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Query Metadata for Account and Conference

Returns a (potentially empty) list of metadata for the recordings that took place during the specified conference

```ts
async getQueryMetadataForAccountAndConference(
  accountId: string,
  conferenceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConferenceRecordingMetadataResponse[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`ConferenceRecordingMetadataResponse[]`](#conference-recording-metadata-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
try {
  const { result, ...httpResponse } = await aPIController.getQueryMetadataForAccountAndConference(accountId, conferenceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Metadata for Conference Recording

Returns metadata for the specified recording

```ts
async getMetadataForConferenceRecording(
  accountId: string,
  conferenceId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecordingMetadataResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`RecordingMetadataResponse`](#recording-metadata-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.getMetadataForConferenceRecording(accountId, conferenceId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Stream Conference Recording Media

Downloads the specified recording

```ts
async getStreamConferenceRecordingMedia(
  accountId: string,
  conferenceId: string,
  recordingId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `conferenceId` | `string` | Template, Required | - |
| `recordingId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`NodeJS.ReadableStream | Blob`

##### Example Usage

```ts
const accountId = 'accountId0';
const conferenceId = 'conferenceId0';
const recordingId = 'recordingId2';
try {
  const { result, ...httpResponse } = await aPIController.getStreamConferenceRecordingMedia(accountId, conferenceId, recordingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

#### Get Query Metadata for Account

Returns a list of metadata for the recordings associated with the specified account. The list can be filtered by the optional from, to, minStartTime, and maxStartTime arguments. The list is capped at 1000 entries and may be empty if no recordings match the specified criteria.

```ts
async getQueryMetadataForAccount(
  accountId: string,
  from?: string,
  to?: string,
  minStartTime?: string,
  maxStartTime?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecordingMetadataResponse[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | - |
| `from` | `string` | Query, Optional | - |
| `to` | `string` | Query, Optional | - |
| `minStartTime` | `string` | Query, Optional | - |
| `maxStartTime` | `string` | Query, Optional | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`RecordingMetadataResponse[]`](#recording-metadata-response)

##### Example Usage

```ts
const accountId = 'accountId0';
try {
  const { result, ...httpResponse } = await aPIController.getQueryMetadataForAccount(accountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Something's not quite right... Your request is invalid. Please fix it before trying again. | [`ApiErrorResponseError`](#api-error-response) |
| 401 | Your credentials are invalid. Please use your Bandwidth dashboard credentials to authenticate to the API. | `ApiError` |
| 403 | User unauthorized to perform this action. | [`ApiErrorResponseError`](#api-error-response) |
| 404 | The resource specified cannot be found or does not belong to you. | [`ApiErrorResponseError`](#api-error-response) |
| 415 | We don't support that media type. If a request body is required, please send it to us as `application/json`. | [`ApiErrorResponseError`](#api-error-response) |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. | [`ApiErrorResponseError`](#api-error-response) |
| 500 | Something unexpected happened. Please try again. | [`ApiErrorResponseError`](#api-error-response) |

## Model Reference

### Structures

* [Api Call Response](#api-call-response)
* [Api Call State Response](#api-call-state-response)
* [Api Create Call Request](#api-create-call-request)
* [Api Modify Call Request](#api-modify-call-request)
* [Call Engine Modify Conference Request](#call-engine-modify-conference-request)
* [Api Transcribe Recording Request](#api-transcribe-recording-request)
* [Conference Detail](#conference-detail)
* [Conference Member Detail](#conference-member-detail)
* [Conference Recording Metadata Response](#conference-recording-metadata-response)
* [Modify Call Recording State](#modify-call-recording-state-1)
* [Recording Metadata Response](#recording-metadata-response)
* [Transcript](#transcript)
* [Transcription](#transcription)
* [Transcription Response](#transcription-response)

#### Api Call Response

##### Class Name

`ApiCallResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` |  | - |
| `callId` | `string` |  | - |
| `applicationId` | `string` |  | - |
| `to` | `string` |  | - |
| `from` | `string` |  | - |
| `startTime` | `string` | Optional | - |
| `callUrl` | `string` |  | - |
| `callTimeout` | `number` | Optional | - |
| `callbackTimeout` | `number` | Optional | - |
| `answerUrl` | `string` |  | - |
| `answerMethod` | [`AnswerMethodEnum`](#answer-method) |  | - |
| `answerFallbackUrl` | `string` | Optional | - |
| `answerFallbackMethod` | [`AnswerFallbackMethodEnum`](#answer-fallback-method) | Optional | - |
| `disconnectUrl` | `string` | Optional | - |
| `disconnectMethod` | [`DisconnectMethodEnum`](#disconnect-method) |  | - |
| `username` | `string` | Optional | - |
| `password` | `string` | Optional | - |
| `fallbackUsername` | `string` | Optional | - |
| `fallbackPassword` | `string` | Optional | - |
| `tag` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "accountId": "accountId0",
  "callId": "callId0",
  "applicationId": "applicationId0",
  "to": "to6",
  "from": "from2",
  "startTime": null,
  "callUrl": "callUrl2",
  "callTimeout": null,
  "callbackTimeout": null,
  "answerUrl": "answerUrl8",
  "answerMethod": "POST",
  "answerFallbackUrl": null,
  "answerFallbackMethod": null,
  "disconnectUrl": null,
  "disconnectMethod": "POST",
  "username": null,
  "password": null,
  "fallbackUsername": null,
  "fallbackPassword": null,
  "tag": null
}
```

#### Api Call State Response

##### Class Name

`ApiCallStateResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callId` | `string` | Optional | - |
| `parentCallId` | `string` | Optional | - |
| `applicationId` | `string` | Optional | - |
| `accountId` | `string` | Optional | - |
| `to` | `string` | Optional | - |
| `from` | `string` | Optional | - |
| `direction` | `string` | Optional | - |
| `state` | [`StateEnum`](#state) | Optional | - |
| `startTime` | `string` | Optional | - |
| `answerTime` | `string` | Optional | - |
| `endTime` | `string` | Optional | - |
| `disconnectCause` | [`DisconnectCauseEnum`](#disconnect-cause) | Optional | - |
| `errorMessage` | `string` | Optional | - |
| `errorId` | `string` | Optional | - |
| `lastUpdate` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "callId": null,
  "parentCallId": null,
  "applicationId": null,
  "accountId": null,
  "to": null,
  "from": null,
  "direction": null,
  "state": null,
  "startTime": null,
  "answerTime": null,
  "endTime": null,
  "disconnectCause": null,
  "errorMessage": null,
  "errorId": null,
  "lastUpdate": null
}
```

#### Api Create Call Request

##### Class Name

`ApiCreateCallRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` |  | Format is E164 |
| `to` | `string` |  | Format is E164 |
| `callTimeout` | `number` | Optional | - |
| `callbackTimeout` | `number` | Optional | - |
| `answerUrl` | `string` |  | - |
| `answerFallbackUrl` | `string` | Optional | - |
| `username` | `string` | Optional | - |
| `password` | `string` | Optional | - |
| `fallbackUsername` | `string` | Optional | - |
| `fallbackPassword` | `string` | Optional | - |
| `answerMethod` | [`AnswerMethodEnum`](#answer-method) | Optional | - |
| `answerFallbackMethod` | [`AnswerFallbackMethodEnum`](#answer-fallback-method) | Optional | - |
| `disconnectUrl` | `string` | Optional | - |
| `disconnectMethod` | [`DisconnectMethodEnum`](#disconnect-method) | Optional | - |
| `tag` | `string` | Optional | - |
| `applicationId` | `string` |  | - |
| `obfuscatedTo` | `string` | Optional | - |
| `obfuscatedFrom` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "from": "+15558675309",
  "to": "+15555555555",
  "answerUrl": null,
  "applicationId": null
}
```

#### Api Modify Call Request

##### Class Name

`ApiModifyCallRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | [`State1Enum`](#state-1) | Optional | - |
| `redirectUrl` | `string` |  | - |
| `redirectFallbackUrl` | `string` | Optional | - |
| `redirectMethod` | [`RedirectMethodEnum`](#redirect-method) | Optional | - |
| `redirectFallbackMethod` | [`RedirectFallbackMethodEnum`](#redirect-fallback-method) | Optional | - |
| `username` | `string` | Optional | - |
| `password` | `string` | Optional | - |
| `fallbackUsername` | `string` | Optional | - |
| `fallbackPassword` | `string` | Optional | - |
| `tag` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "state": null,
  "redirectUrl": "redirectUrl6",
  "redirectFallbackUrl": null,
  "redirectMethod": null,
  "redirectFallbackMethod": null,
  "username": null,
  "password": null,
  "fallbackUsername": null,
  "fallbackPassword": null,
  "tag": null
}
```

#### Call Engine Modify Conference Request

##### Class Name

`CallEngineModifyConferenceRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`StatusEnum`](#status) | Optional | - |
| `redirectUrl` | `string` |  | - |
| `redirectFallbackUrl` | `string` | Optional | - |
| `redirectMethod` | [`RedirectMethodEnum`](#redirect-method) | Optional | - |
| `redirectFallbackMethod` | [`RedirectFallbackMethodEnum`](#redirect-fallback-method) | Optional | - |
| `username` | `string` | Optional | - |
| `password` | `string` | Optional | - |
| `fallbackUsername` | `string` | Optional | - |
| `fallbackPassword` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "status": null,
  "redirectUrl": "redirectUrl6",
  "redirectFallbackUrl": null,
  "redirectMethod": null,
  "redirectFallbackMethod": null,
  "username": null,
  "password": null,
  "fallbackUsername": null,
  "fallbackPassword": null
}
```

#### Api Transcribe Recording Request

##### Class Name

`ApiTranscribeRecordingRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callbackUrl` | `string` | Optional | - |
| `callbackMethod` | [`CallbackMethodEnum`](#callback-method) | Optional | - |
| `username` | `string` | Optional | - |
| `password` | `string` | Optional | - |
| `tag` | `string` | Optional | - |
| `callbackTimeout` | `number` | Optional | - |

##### Example (as JSON)

```json
{
  "callbackUrl": null,
  "callbackMethod": null,
  "username": null,
  "password": null,
  "tag": null,
  "callbackTimeout": null
}
```

#### Conference Detail

##### Class Name

`ConferenceDetail`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | - |
| `name` | `string` | Optional | - |
| `createdTime` | `string` | Optional | - |
| `completedTime` | `string` | Optional | - |
| `conferenceEventUrl` | `string` | Optional | - |
| `conferenceEventMethod` | [`ConferenceEventMethodEnum`](#conference-event-method) | Optional | - |
| `tag` | `string` | Optional | - |
| `activeMembers` | [`ConferenceMemberDetail[]`](#conference-member-detail) | Optional | - |

##### Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "createdTime": null,
  "completedTime": null,
  "conferenceEventUrl": null,
  "conferenceEventMethod": null,
  "tag": null,
  "activeMembers": null
}
```

#### Conference Member Detail

##### Class Name

`ConferenceMemberDetail`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callId` | `string` | Optional | - |
| `conferenceId` | `string` | Optional | - |
| `memberUrl` | `string` | Optional | - |
| `mute` | `boolean` | Optional | - |
| `hold` | `boolean` | Optional | - |
| `callIdsToCoach` | `string[]` | Optional | - |

##### Example (as JSON)

```json
{
  "callId": null,
  "conferenceId": null,
  "memberUrl": null,
  "mute": null,
  "hold": null,
  "callIdsToCoach": null
}
```

#### Conference Recording Metadata Response

##### Class Name

`ConferenceRecordingMetadataResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Optional | - |
| `conferenceId` | `string` | Optional | - |
| `name` | `string` | Optional | - |
| `recordingId` | `string` | Optional | - |
| `duration` | `string` | Optional | Format is ISO-8601 |
| `channels` | `number` | Optional | - |
| `startTime` | `string` | Optional | - |
| `endTime` | `string` | Optional | - |
| `fileFormat` | [`FileFormatEnum`](#file-format) | Optional | - |
| `status` | [`Status1Enum`](#status-1) | Optional | - |
| `mediaUrl` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "accountId": null,
  "conferenceId": null,
  "name": null,
  "recordingId": null,
  "duration": null,
  "channels": null,
  "startTime": null,
  "endTime": null,
  "fileFormat": null,
  "status": null,
  "mediaUrl": null
}
```

#### Modify Call Recording State

##### Class Name

`ModifyCallRecordingState`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | [`State2Enum`](#state-2) | Optional | - |

##### Example (as JSON)

```json
{
  "state": null
}
```

#### Recording Metadata Response

##### Class Name

`RecordingMetadataResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Optional | - |
| `accountId` | `string` | Optional | - |
| `callId` | `string` | Optional | - |
| `parentCallId` | `string` | Optional | - |
| `recordingId` | `string` | Optional | - |
| `to` | `string` | Optional | - |
| `from` | `string` | Optional | - |
| `transferCallerId` | `string` | Optional | - |
| `transferTo` | `string` | Optional | - |
| `duration` | `string` | Optional | Format is ISO-8601 |
| `direction` | [`DirectionEnum`](#direction) | Optional | - |
| `channels` | `number` | Optional | - |
| `startTime` | `string` | Optional | - |
| `endTime` | `string` | Optional | - |
| `fileFormat` | [`FileFormatEnum`](#file-format) | Optional | - |
| `status` | [`Status1Enum`](#status-1) | Optional | - |
| `mediaUrl` | `string` | Optional | - |
| `transcription` | [`Transcription`](#transcription) | Optional | - |

##### Example (as JSON)

```json
{
  "applicationId": null,
  "accountId": null,
  "callId": null,
  "parentCallId": null,
  "recordingId": null,
  "to": null,
  "from": null,
  "transferCallerId": null,
  "transferTo": null,
  "duration": null,
  "direction": null,
  "channels": null,
  "startTime": null,
  "endTime": null,
  "fileFormat": null,
  "status": null,
  "mediaUrl": null,
  "transcription": null
}
```

#### Transcript

##### Class Name

`Transcript`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Optional | - |
| `confidence` | `number` | Optional | - |

##### Example (as JSON)

```json
{
  "text": null,
  "confidence": null
}
```

#### Transcription

##### Class Name

`Transcription`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | - |
| `status` | [`Status3Enum`](#status-3) | Optional | - |
| `completedTime` | `string` | Optional | - |
| `url` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "id": null,
  "status": null,
  "completedTime": null,
  "url": null
}
```

#### Transcription Response

##### Class Name

`TranscriptionResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transcripts` | [`Transcript[]`](#transcript) | Optional | - |

##### Example (as JSON)

```json
{
  "transcripts": null
}
```

### Exceptions

* [Api Error Response](#api-error-response)

#### Api Error Response

##### Class Name

`ApiErrorResponseError`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Optional | - |
| `description` | `string` | Optional | - |
| `id` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "type": null,
  "description": null,
  "id": null
}
```

### Enumerations

* [Answer Fallback Method](#answer-fallback-method)
* [Answer Method](#answer-method)
* [Callback Method](#callback-method)
* [Conference Event Method](#conference-event-method)
* [Direction](#direction)
* [Disconnect Cause](#disconnect-cause)
* [Disconnect Method](#disconnect-method)
* [File Format](#file-format)
* [Redirect Fallback Method](#redirect-fallback-method)
* [Redirect Method](#redirect-method)
* [State](#state)
* [State 1](#state-1)
* [State 2](#state-2)
* [Status](#status)
* [Status 1](#status-1)
* [Status 3](#status-3)

#### Answer Fallback Method

##### Class Name

`AnswerFallbackMethodEnum`

##### Fields

| Name |
|  --- |
| `pOST` |
| `gET` |

#### Answer Method

##### Class Name

`AnswerMethodEnum`

##### Fields

| Name |
|  --- |
| `pOST` |
| `gET` |

#### Callback Method

##### Class Name

`CallbackMethodEnum`

##### Fields

| Name |
|  --- |
| `gET` |
| `hEAD` |
| `pOST` |
| `pUT` |
| `pATCH` |
| `dELETE` |
| `oPTIONS` |
| `tRACE` |

#### Conference Event Method

##### Class Name

`ConferenceEventMethodEnum`

##### Fields

| Name |
|  --- |
| `gET` |
| `hEAD` |
| `pOST` |
| `pUT` |
| `pATCH` |
| `dELETE` |
| `oPTIONS` |
| `tRACE` |

#### Direction

##### Class Name

`DirectionEnum`

##### Fields

| Name |
|  --- |
| `inbound` |
| `outbound` |

#### Disconnect Cause

##### Class Name

`DisconnectCauseEnum`

##### Fields

| Name |
|  --- |
| `busy` |
| `callbackerror` |
| `cancel` |
| `error` |
| `hangup` |
| `invalidbxml` |
| `rejected` |
| `timeout` |
| `accountlimit` |
| `nodecapacityexceeded` |
| `unknown` |
| `applicationerror` |

#### Disconnect Method

##### Class Name

`DisconnectMethodEnum`

##### Fields

| Name |
|  --- |
| `pOST` |
| `gET` |

#### File Format

##### Class Name

`FileFormatEnum`

##### Fields

| Name |
|  --- |
| `mp3` |
| `wav` |

#### Redirect Fallback Method

##### Class Name

`RedirectFallbackMethodEnum`

##### Fields

| Name |
|  --- |
| `pOST` |
| `gET` |

#### Redirect Method

##### Class Name

`RedirectMethodEnum`

##### Fields

| Name |
|  --- |
| `pOST` |
| `gET` |

#### State

##### Class Name

`StateEnum`

##### Fields

| Name |
|  --- |
| `disconnected` |
| `answered` |
| `initiated` |

#### State 1

##### Class Name

`State1Enum`

##### Fields

| Name |
|  --- |
| `active` |
| `completed` |

#### State 2

##### Class Name

`State2Enum`

##### Fields

| Name |
|  --- |
| `nOTRECORDING` |
| `pAUSED` |
| `rECORDING` |

#### Status

##### Class Name

`StatusEnum`

##### Fields

| Name |
|  --- |
| `active` |
| `completed` |

#### Status 1

##### Class Name

`Status1Enum`

##### Fields

| Name |
|  --- |
| `processing` |
| `partial` |
| `complete` |
| `deleted` |
| `error` |
| `alreadyinprogress` |

#### Status 3

##### Class Name

`Status3Enum`

##### Fields

| Name |
|  --- |
| `none` |
| `processing` |
| `available` |
| `error` |
| `timeout` |
| `filesizetoobig` |
| `filesizetoosmall` |

