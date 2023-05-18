import { ApiError, ApiController, Client, ModeEnum, CallbackMethodEnum, MachineDetectionConfiguration, Environment } from '../src';
import { HttpClient } from '../src/http/httpClient';

const sleep = ms => new Promise(r => setTimeout(r, ms));
let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
});

describe('custom client', () => {
    it('should create a client with a custom base url', async () => {
        const customClient = new Client({
            basicAuthUserName: process.env.BW_USERNAME,
            basicAuthPassword: process.env.BW_PASSWORD,
            environment: Environment.Custom,
            baseUrl: 'https://test.custom.bandwidth.com'
        });
        expect(customClient._config.baseUrl).toEqual('https://test.custom.bandwidth.com');
    });
});

describe('http client', () => {
    const httpClient = new HttpClient();
    it('should throw error on unknown body type', async () => {
        const httpRequest = {
            body: {
                type: "somethingmadeup"
            }
        };
        expect(() => httpClient.convertHttpRequest(httpRequest)).toThrow("HTTP client encountered unknown body type 'somethingmadeup'. Could not execute HTTP request.");
    });

    it('should not throw error on known body type', async () => {
        const httpRequest = {
            body: {
                type: "text"
            }
        };
        expect(httpClient.convertHttpRequest(httpRequest)).toBeDefined();
    });
});

describe('api', () => {
    it('should create call and get call state', async () => {
        // create call
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = process.env.USER_NUMBER;
        const answerUrl = `${process.env.BASE_CALLBACK_URL}/callbacks/answer`;
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const body = {
            from: from,
            to: to,
            answerUrl: answerUrl,
            applicationId: applicationId,
        };
        const createCallResponse = await controller.createCall(accountId, body);
	await sleep(3000);
        expect(createCallResponse.result.applicationId).toEqual(applicationId);
        expect(createCallResponse.result.to).toEqual(to);
        expect(createCallResponse.result.from).toEqual(from);
        expect(Date.parse(createCallResponse.result.enqueuedTime)).toBeTruthy();

        // get call state
        const callId = createCallResponse.result.callId;
        const getCallStateResponse = await controller.getCall(accountId, callId);

        expect(getCallStateResponse.result.applicationId).toEqual(applicationId);
        expect(getCallStateResponse.result.to).toEqual(to);
        expect(getCallStateResponse.result.from).toEqual(from);
        expect(getCallStateResponse.result.callId).toEqual(callId);
        expect(Date.parse(getCallStateResponse.result.enqueuedTime)).toBeTruthy();
        expect(getCallStateResponse.result.enqueuedTime).toEqual(createCallResponse.result.enqueuedTime);
    });

    it('should create call with AMD and get call state', async () => {
        // create call
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = process.env.USER_NUMBER;
        const answerUrl = `${process.env.BASE_CALLBACK_URL}/callbacks/answer`;
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const machineDetection = {
            mode: ModeEnum.Async,
            detectionTimeout: 5.0,
            silenceTimeout: 5.0,
            speechThreshold: 5.0,
            speechEndThreshold: 5.0,
            delayResult: true,
            callbackUrl: `${process.env.BASE_CALLBACK_URL}/callbacks/machineDetection`,
            callbackMethod: CallbackMethodEnum.POST,
            machineSpeechEndThreshold: 3.2
        };

        const body = {
            from: from,
            to: to,
            answerUrl: answerUrl,
            applicationId: applicationId,
            machineDetection: machineDetection
        };

        const createCallResponse = await controller.createCall(accountId, body);
	await sleep(3000);
        expect(createCallResponse.result.applicationId).toEqual(applicationId);
        expect(createCallResponse.result.to).toEqual(to);
        expect(createCallResponse.result.from).toEqual(from);

        // get call state
        const callId = createCallResponse.result.callId;
        const getCallStateResponse = await controller.getCall(accountId, callId);

        expect(getCallStateResponse.result.applicationId).toEqual(applicationId);
        expect(getCallStateResponse.result.to).toEqual(to);
        expect(getCallStateResponse.result.from).toEqual(from);
        expect(getCallStateResponse.result.callId).toEqual(callId);
    });

    it('should create call with priority', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = process.env.USER_NUMBER;
        const answerUrl = `${process.env.BASE_CALLBACK_URL}/callbacks/answer`;
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const priority = 1;

        const body = {
            from: from,
            to: to,
            answerUrl: answerUrl,
            applicationId: applicationId,
            priority: priority
        };

        const createCallResponse = await controller.createCall(accountId, body);
	await sleep(3000);
        expect(createCallResponse.result.applicationId).toEqual(applicationId);
        expect(createCallResponse.result.to).toEqual(to);
        expect(createCallResponse.result.from).toEqual(from);
        expect(createCallResponse.result.priority).toEqual(priority);
    });

    it('should throw an error on an invalid phone number', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = "+1invalid";
        const answerUrl = `${process.env.BASE_CALLBACK_URL}/callbacks/answer`;
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const body = {
            from: from,
            to: to,
            answerUrl: answerUrl,
            applicationId: applicationId,
        };

        const t = async () => {
            await controller.createCall(accountId, body);
        }

        expect(t).rejects.toThrow(ApiError);
    });
});
