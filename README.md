# Getting started

Bandwidth's HTTP voice platform

```bash
npm install @bandwidth/voice
```

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const BandwidthVoice = require('@bandwidth/voice');

// Configuration parameters and credentials
BandwidthVoice.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
BandwidthVoice.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = BandwidthVoice.APIController;
```

### <a name="create_call"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createCall") createCall

> Creates a call request


```javascript
function createCall(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new BandwidthVoice.ApiCreateCallRequest({
        "from": "+18888888888",
        "to": "+19999999999",
        "applicationId": "1234",
        "answerUrl": "https://server.com/answerUrl"
    });

    controller.createCall(accountId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="modify_call"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.modifyCall") modifyCall

> Interrupts and replaces an active call's BXML document


```javascript
function modifyCall(accountId, callId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';
    var body = new BandwidthVoice.ApiModifyCallRequest({
        "state": "completed"
    });

    controller.modifyCall(accountId, callId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The call can't be modified in its current state |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 404 | The call never existed, no longer exists, or is inaccessible to you |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="modify_call_recording_state"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.modifyCallRecordingState") modifyCallRecordingState

> Pauses or resumes a recording


```javascript
function modifyCallRecordingState(accountId, callId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';
    var body = new BandwidthVoice.ModifyCallRecordingState({
        "state": "paused"
    });

    controller.modifyCallRecordingState(accountId, callId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The call can't be modified in its current state |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 404 | The call never existed, no longer exists, or is inaccessible to you |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="get_query_metadata_for_account_and_call"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getQueryMetadataForAccountAndCall") getQueryMetadataForAccountAndCall

> Returns a (potentially empty) list of metadata for the recordings that took place during the specified call


```javascript
function getQueryMetadataForAccountAndCall(accountId, callId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';

    controller.getQueryMetadataForAccountAndCall(accountId, callId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="get_metadata_for_recording"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getMetadataForRecording") getMetadataForRecording

> Returns metadata for the specified recording


```javascript
function getMetadataForRecording(accountId, callId, recordingId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |
| recordingId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';
    var recordingId = 'recordingId';

    controller.getMetadataForRecording(accountId, callId, recordingId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 404 | The recording never existed, no longer exists, or is inaccessible to you |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.deleteRecording") deleteRecording

> Deletes the specified recording


```javascript
function deleteRecording(accountId, callId, recordingId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |
| recordingId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';
    var recordingId = 'recordingId';

    controller.deleteRecording(accountId, callId, recordingId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 404 | The recording never existed, no longer exists, or is inaccessible to you |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="get_stream_recording_media"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getStreamRecordingMedia") getStreamRecordingMedia

> Downloads the specified recording


```javascript
function getStreamRecordingMedia(accountId, callId, recordingId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |
| callId |  ``` Required ```  | TODO: Add a parameter description |
| recordingId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var callId = 'callId';
    var recordingId = 'recordingId';

    controller.getStreamRecordingMedia(accountId, callId, recordingId, function(error, response, context) {

    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 404 | The recording never existed, no longer exists, or is inaccessible to you |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




### <a name="get_query_metadata_for_account"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getQueryMetadataForAccount") getQueryMetadataForAccount

> Returns a (potentially empty; capped at 1000) list of metadata for the recordings associated with the specified account


```javascript
function getQueryMetadataForAccount(accountId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountId = 'accountId';

    controller.getQueryMetadataForAccount(accountId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Something didn't look right about that request. Please fix it before trying again. |
| 401 | Please authenticate yourself |
| 403 | Your credentials are invalid. Please use your API credentials for the Bandwidth Dashboard. |
| 415 | We don't support that media type. Please send us `application/json`. |
| 429 | You're sending requests to this endpoint too frequently. Please slow your request rate down and try again. |
| 500 | Something unexpected happened. Please try again. |




[Back to List of Controllers](#list_of_controllers)



