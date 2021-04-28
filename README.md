# Bandwidth Node Voice SDK

Note: As of version 2.0.0, this package has been upgraded to Typescript

## Getting Started

### Installation

```
npm install @bandwidth/voice
```

### Initialize

```
import { ApiCreateCallRequest, ApiError, ApiController, Client, Response, SpeakSentence } from '@bandwidth/voice';
const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password"
});

const controller = new ApiController(client);
const accountId = "12345";
```

### Create A Phone Call

```
var from = "+15554443333";
var to = "+15553334444";
var answerUrl = "https://sample.com";
var applicationId = "3-a-b-c";
var body = {
    from: from,
    to: to,
    answerUrl: answerUrl,
    applicationId: applicationId,
};

var createCallResponse = await controller.createCall(accountId, body);
console.log(createCallResponse.result.callId);
```

### Create BXML

```
var speakSentence = new SpeakSentence({
    sentence: "test",
    voice: "susan",
    gender: "female",
    locale: "en_US",
});

var response = new Response(speakSentence);

console.log(response.toBxml());
```

## Supported Node Versions

This package can be used with Node >= 10

## Documentation

Documentation for this package can be found at https://dev.bandwidth.com/sdks/node.html

## Credentials

Information for credentials for this package can be found at https://dev.bandwidth.com/guides/accountCredentials.html
