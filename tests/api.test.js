import { ApiError, ApiController, Client, ModeEnum, CallbackMethodEnum, MachineDetectionRequest } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
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
        };

        const body = {
          from: from,
          to: to,
          answerUrl: answerUrl,
          applicationId: applicationId,
          machineDetection: machineDetection
        };

        console.log(body);
        console.log(machineDetection);

        const createCallResponse = await controller.createCall(accountId, body);
        expect(createCallResponse.result.applicationId).toEqual(applicationId);
        expect(createCallResponse.result.to).toEqual(to);
        expect(createCallResponse.result.from).toEqual(from);

        console.log(createCallResponse);

        // get call state
        const callId = createCallResponse.result.callId;
        const getCallStateResponse = await controller.getCall(accountId, callId);

        expect(getCallStateResponse.result.applicationId).toEqual(applicationId);
        expect(getCallStateResponse.result.to).toEqual(to);
        expect(getCallStateResponse.result.from).toEqual(from);
        expect(getCallStateResponse.result.callId).toEqual(callId);
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
