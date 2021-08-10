import { ApiCreateCallRequest, ApiError, ApiController, Client } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BANDWIDTH_USERNAME,
        basicAuthPassword: process.env.BANDWIDTH_PASSWORD
    });

    controller = new ApiController(client);
});

describe('api', () => {
    it('should create call and get call state', async () => {
        //create call
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const from = process.env.PHONE_NUMBER_OUTBOUND;
        const to = process.env.PHONE_NUMBER_INBOUND;
        const answerUrl = process.env.VOICE_CALLBACK_URL;
        const applicationId = process.env.VOICE_APPLICATION_ID;
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
        
        //get call state
        const callId = createCallResponse.result.callId;
        const getCallStateResponse = await controller.getCall(accountId, callId);
        expect(getCallStateResponse.result.applicationId).toEqual(applicationId);
        expect(getCallStateResponse.result.to).toEqual(to);
        expect(getCallStateResponse.result.from).toEqual(from);
        expect(getCallStateResponse.result.callId).toEqual(callId);
    });

    it('should throw an error on an invalid phone number', async () => {
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const from = process.env.PHONE_NUMBER_OUTBOUND;
        const to = "+1invalid";
        const answerUrl = process.env.VOICE_CALLBACK_URL;
        const applicationId = process.env.VOICE_APPLICATION_ID;
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
