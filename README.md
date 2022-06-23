# Bandwidth Node Voice SDK

[![Test](https://github.com/Bandwidth/node-voice/actions/workflows/test.yml/badge.svg)](https://github.com/Bandwidth/node-voice/actions/workflows/test.yml)

| **OS** | **Node** |
|:---:|:---:|
| Windows 2016 | 12, 14, 16 |
| Windows 2019 | 12, 14, 16 |
| Ubuntu 18.04 | 12, 14, 16 |
| Ubuntu 20.04 | 12, 14, 16 |


Note: As of version 2.0.0, this package has been upgraded to TypeScript

## Getting Started

### Installation

```
npm install @bandwidth/voice
```

### Initialize

```
import { CreateCallRequest, ApiError, ApiController, Client, Response, SpeakSentence } from '@bandwidth/voice';
const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password"
});

const controller = new ApiController(client);
const accountId = "12345";
```

*To use a custom environment*
```
import { ApiController, Client, Environment } from '@bandwidth/voice';
const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password",
    environment: Environment.Custom,
    baseUrl: 'https://custom.bandwidth.com'
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


## Credentials

Information for credentials for this package can be found at https://dev.bandwidth.com/guides/accountCredentials.html
