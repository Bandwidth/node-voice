import { Response,
  Gather,
  Bridge,
  StopGather,
  StartGather,
  SpeakSentence,
  PlayAudio,
  Conference,
  SendDtmf,
  Ring,
  Redirect,
  StartRecording,
  StopRecording,
  ResumeRecording,
  PauseRecording,
  Record,
  Pause,
  Forward,
  Hangup,
  Transfer
} from '../src';

//Test for Conference verb
describe("Conference Verb", () => {
    describe("basic Conference Verb", () => {
        it("Create basic Conference response with LIST of ids", () => {
            var expectedString = '<?xml version="1.0" encoding="UTF-8"?><Response><Conference username="username" password="pswd" tag="tag1" mute="true" hold="true" callIdsToCoach="id1,id2" conferenceEventUrl="https://example.com" conferenceEventMethod="POST">my-conference</Conference></Response>';

            var conference = new Conference({
                hold: true,
                mute: true,
                tag: 'tag1',
                username: 'username',
                password: 'pswd',
                callIdsToCoach: ['id1','id2'],
                conferenceEventMethod: 'POST',
                conferenceEventUrl: 'https://example.com',
                name: 'my-conference',
            });

            var response = new Response(conference);
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for nested Gather
describe("Nested Gather", () => {
    describe("set with Array", () => {
        it("Should nest all verbs under the Gather", () => {

            var expectedString = '<?xml version="1.0" encoding="UTF-8"?><Response><Gather><SpeakSentence>test1</SpeakSentence><PlayAudio>https://example.com</PlayAudio><SpeakSentence>test2</SpeakSentence></Gather></Response>';

            var speak1 = new SpeakSentence({
                sentence: 'test1'
            });

            var playAudio = new PlayAudio({
                url: 'https://example.com'
            });

            var speak2 = new SpeakSentence({
                sentence: 'test2'
            });

            var arr = [speak1, playAudio, speak2];

            var gather = new Gather({
                audioProducers: arr
            });

            var response = new Response(gather);

            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Response
describe("Response", function() {
    describe("#toBxml()", function() {
        it("should return empty response tag with no verbs", function() {
            var response = new Response()

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response/>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Hangup
describe("Hangup", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Hangup tag", function() {
            var hangup = new Hangup();

            var response = new Response(hangup);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Hangup/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for PlayAudio
describe("PlayAudio", function() {
    describe("#toBxml()", function() {
        it("should generate a proper PlayAudio tag", function() {
            var playAudio = new PlayAudio({
                url: "https://test.com",
                username: "user",
                password: "pass",
            });

            var response = new Response(playAudio);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for SpeakSentence
describe("SpeakSentence", function() {
    describe("#toBxml()", function() {
        it("should generate a proper SpeakSentence tag", function() {
            var speakSentence = new SpeakSentence({
                sentence: "test",
                voice: "susan",
                gender: "female",
                locale: "en_US",
            });

            var response = new Response(speakSentence);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
        it("should generated a proper SpeakSentence tag with SSML", function() {
            var speakSentence = new SpeakSentence({
                sentence: 'Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message.'
            });

            var response = new Response(speakSentence);

            var expectedString = '<?xml version="1.0" encoding="UTF-8"?><Response><SpeakSentence>Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message.</SpeakSentence></Response>';
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for SendDtmf
describe("SendDtmf", function() {
    describe("#toBxml()", function() {
        it("should generate a proper SendDtmf tag", function() {
            var sendDtmf = new SendDtmf({
                dtmf: '123'
            });

            var response = new Response(sendDtmf);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><SendDtmf>123</SendDtmf></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Forward
describe("Forward", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Forward tag", function() {
            var forward = new Forward({
                to: "+18888888888",
                from: "+19999999999",
                callTimeout: 3,
                diversionTreatment: "none",
                diversionReason: "away",
            });

            var response = new Response(forward);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Forward to=\"+18888888888\" from=\"+19999999999\" callTimeout=\"3\" diversionTreatment=\"none\" diversionReason=\"away\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
})

//Tests for Pause
describe("Pause", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Pause tag", function() {
            var pause = new Pause({
                duration: 3
            });

            var response = new Response(pause);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Pause duration=\"3\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Redirect
describe("Redirect", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Redirect tag", function() {
            var redirect = new Redirect({
                username: "user",
                password: "pass",
                redirectUrl: "https://test.com",
                redirectMethod: "GET",
                tag: "tag",
                redirectFallbackUrl: "https://test2.com",
                redirectFallbackMethod: "POST",
                fallbackUsername: "fuser",
                fallbackPassword: "fpass",
            });

            var response = new Response(redirect);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Redirect username=\"user\" password=\"pass\" redirectUrl=\"https://test.com\" redirectMethod=\"GET\" tag=\"tag\" redirectFallbackUrl=\"https://test2.com\" redirectFallbackMethod=\"POST\" fallbackUsername=\"fuser\" fallbackPassword=\"fpass\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Gather
describe("Gather", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Gather tag with a nested SpeakSentence", function() {
            var speakSentence = new SpeakSentence({
                sentence: "test",
                voice: "susan",
                gender: "female",
                locale: "en_US",
            });

            var gather = new Gather({
                gatherUrl: "https://test.com",
                gatherMethod: "GET",
                username: "user",
                password: "pass",
                tag: "tag",
                terminatingDigits: "123",
                maxDigits: 3,
                interDigitTimeout: 4,
                firstDigitTimeout: 5,
                audioProducers: [speakSentence]
            });

            var response = new Response(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\"><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Gather></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
        it("should generate a proper Gather tag with a nested PlayAudio", function() {
            var playAudio = new PlayAudio({
                url: "https://test.com",
                username: "user",
                password: "pass",
            });

            var gather = new Gather({
                gatherUrl: "https://test.com",
                gatherMethod: "GET",
                username: "user",
                password: "pass",
                tag: "tag",
                terminatingDigits: "123",
                maxDigits: 3,
                interDigitTimeout: 4,
                firstDigitTimeout: 5,
                audioProducers: [playAudio],
            });

            var response = new Response(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\"><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Gather></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
        it("should generate a proper Gather tag with no nested tags", function() {
            var gather = new Gather({
                gatherUrl: "https://test.com",
                gatherMethod: "GET",
                username: "user",
                password: "pass",
                tag: "tag",
                terminatingDigits: "123",
                maxDigits: 3,
                interDigitTimeout: 4,
                firstDigitTimeout: 5,
                repeatCount: 6,
                gatherFallbackUrl: "https://test2.com",
                gatherFallbackMethod: "POST",
                fallbackUsername: "fuser",
                fallbackPassword: "fpass",
            });


            var response = new Response(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\" repeatCount=\"6\" gatherFallbackUrl=\"https://test2.com\" gatherFallbackMethod=\"POST\" fallbackUsername=\"fuser\" fallbackPassword=\"fpass\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Transfer
describe("Transfer", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Transfer tag", function() {
            var number1 = new Transfer.PhoneNumber({
                number: "+17777777777",
                transferAnswerUrl: "https://test.com",
                transferAnswerMethod: "GET",
                username: "user",
                password: "pass",
                tag: "tag",
                transferAnswerFallbackUrl: "https://test2.com",
                transferAnswerFallbackMethod: "GET",
                fallbackUsername: "fuser",
                fallbackPassword: "fpass",
            });

            var sipUri = new Transfer.SipUri({
                sipUri: "sip-uri",
                uui: "uui",
                transferAnswerUrl: "https://test3.com",
                transferAnswerMethod: "POST",
                username: "user2",
                password: "pass2",
                tag: "tag2",
                transferAnswerFallbackUrl: "https://test4.com",
                transferAnswerFallbackMethod: "POST",
                fallbackUsername: "fuser2",
                fallbackPassword: "fpass4",
            });

            var transfer = new Transfer({
                transferCallerId: "+18888888888",
                callTimeout: 3,
                tag: "tagTransfer",
                transferCompleteUrl: "https://testtransfer.com",
                transferCompleteMethod: "GET",
                username: "usertransfer",
                password: "passtransfer",
                diversionTreatment: "none",
                diversionReason: "away",
                transferCompleteFallbackUrl: "https://test.com",
                transferCompleteFallbackMethod: "POST",
                fallbackUsername: "fusern",
                fallbackPassword: "fpassw",
                phoneNumbers: [number1],
                sipUris: [sipUri]
            });

            var response = new Response(transfer);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Transfer transferCallerId=\"+18888888888\" callTimeout=\"3\" tag=\"tagTransfer\" transferCompleteUrl=\"https://testtransfer.com\" transferCompleteMethod=\"GET\" username=\"usertransfer\" password=\"passtransfer\" diversionTreatment=\"none\" diversionReason=\"away\" transferCompleteFallbackUrl=\"https://test.com\" transferCompleteFallbackMethod=\"POST\" fallbackUsername=\"fusern\" fallbackPassword=\"fpassw\"><PhoneNumber transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" transferAnswerFallbackUrl=\"https://test2.com\" transferAnswerFallbackMethod=\"GET\" fallbackUsername=\"fuser\" fallbackPassword=\"fpass\">+17777777777</PhoneNumber><SipUri uui=\"uui\" transferAnswerUrl=\"https://test3.com\" transferAnswerMethod=\"POST\" transferAnswerFallbackUrl=\"https://test4.com\" transferAnswerFallbackMethod=\"POST\" username=\"user2\" password=\"pass2\" fallbackUsername=\"fuser2\" fallbackPassword=\"fpass4\" tag=\"tag2\">sip-uri</SipUri></Transfer></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for PlayAudio and SpeakSentence combined
describe("PlayAudioSpeakSentence", function() {
    describe("#toBxml()", function() {
        it("should generate a proper PlayAudio and SpeakSentence tag combined", function() {
            var playAudio = new PlayAudio({
                url: "https://test.com",
                username: "user",
                password: "pass",
            });

            var speakSentence = new SpeakSentence({
                sentence: "test",
                voice: "susan",
                gender: "female",
                locale: "en_US",
            });

            var response = new Response(playAudio, speakSentence);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Record
describe("Record", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Record tag", function() {
            var record = new Record({
                recordCompleteUrl: "https://url.com",
                recordCompleteMethod: "POST",
                recordingAvailableUrl: "https://url.com",
                recordingAvailableMethod: "POST",
                username: "user",
                password: "pass",
                tag: "tag",
                terminatingDigits: "123",
                maxDuration: 3,
                fileFormat: "wav",
                recordCompleteFallbackUrl: "https://test.com",
                recordCompleteFallbackMethod: "GET",
                fallbackUsername: "fuser",
                fallbackPassword: "fpass",
            });

            var response = new Response(record);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Record username=\"user\" password=\"pass\" recordCompleteUrl=\"https://url.com\" recordCompleteMethod=\"POST\" recordingAvailableUrl=\"https://url.com\" recordingAvailableMethod=\"POST\" tag=\"tag\" terminatingDigits=\"123\" maxDuration=\"3\" fileFormat=\"wav\" recordCompleteFallbackUrl=\"https://test.com\" recordCompleteFallbackMethod=\"GET\" fallbackUsername=\"fuser\" fallbackPassword=\"fpass\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for StartRecording
describe("StartRecording", function() {
    describe("#toBxml()", function() {
        it("should generate a proper StartRecording tag", function() {
            var startRecording = new StartRecording({
                recordingAvailableUrl: "https://url.com",
                recordingAvailableMethod: "POST",
                username: "user",
                password: "pass",
                tag: "tag",
                fileFormat: "wav",
                multiChannel: false,
            });

            var response = new Response(startRecording);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><StartRecording username=\"user\" password=\"pass\" recordingAvailableUrl=\"https://url.com\" recordingAvailableMethod=\"POST\" tag=\"tag\" fileFormat=\"wav\" multiChannel=\"false\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for PauseRecording
describe("PauseRecording", function() {
    describe("#toBxml()", function() {
        it("should generate a proper PauseRecording tag", function() {
            var pauseRecording = new PauseRecording();

            var response = new Response(pauseRecording);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><PauseRecording/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for ResumeRecording
describe("ResumeRecording", function() {
    describe("#toBxml()", function() {
        it("should generate a proper ResumeRecording tag", function() {
            var resumeRecording = new ResumeRecording();

            var response = new Response(resumeRecording);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><ResumeRecording/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for StopRecording
describe("StopRecording", function() {
    describe("#toBxml()", function() {
        it("should generate a proper StopRecording tag", function() {
            var stopRecording = new StopRecording();

            var response = new Response(stopRecording);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><StopRecording/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Tests for Bridge
describe("Bridge", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Bridge tag", function() {
            var bridge = new Bridge({
                callId: "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
                bridgeCompleteUrl: "https://test.com",
                bridgeCompleteMethod: "GET",
                bridgeTargetCompleteUrl: "https://test2.com",
                bridgeTargetCompleteMethod: "POST",
                username: "user",
                password: "pass",
                tag: "custom tag",
                bridgeCompleteFallbackUrl: "https://test3.com",
                bridgeCompleteFallbackMethod: "GET",
                bridgeTargetCompleteFallbackUrl: "https://test4.com",
                bridgeTargetCompleteFallbackMethod: "POST",
                fallbackUsername: "fuser",
                fallbackPassword: "fpass",
            });

            var response = new Response(bridge);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Bridge bridgeCompleteUrl=\"https://test.com\" bridgeCompleteMethod=\"GET\" bridgeTargetCompleteUrl=\"https://test2.com\" bridgeTargetCompleteMethod=\"POST\" username=\"user\" password=\"pass\" tag=\"custom tag\" bridgeCompleteFallbackUrl=\"https://test3.com\" bridgeCompleteFallbackMethod=\"GET\" bridgeTargetCompleteFallbackUrl=\"https://test4.com\" bridgeTargetCompleteFallbackMethod=\"POST\" fallbackUsername=\"fuser\" fallbackPassword=\"fpass\">c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d</Bridge></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Test for Ring
describe("Ring", function() {
    describe("#toBxml()", function() {
        it("should generate a proper Ring tag", function() {
            var ring = new Ring({
                duration: 3,
                answerCall: false
            });

            var response = new Response(ring);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Ring duration=\"3\" answerCall=\"false\"/></Response>";
            expect(response.toBxml()).toEqual(expectedString);
        });
    });
});

//Test for StartGather
describe("StartGather", function(){
  describe("#toBxml()", function() {
    it("should generate a proper StartGather tag", function(){
      var startGather = new StartGather({
          dtmfUrl: "https://test.com",
          dtmfMethod: "POST",
          username: "user",
          password: "pass",
          tag: "custom tag",
      });

      var response = new Response(startGather);

      var expectedString = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><StartGather dtmfUrl=\"https://test.com\" dtmfMethod=\"POST\" username=\"user\" password=\"pass\" tag=\"custom tag\"/></Response>';

      expect(response.toBxml()).toEqual(expectedString);
    });
  });
});

//Test for StopGather
describe("StopGather", function(){
  describe("#toBxml()", function() {
    it("should generate a proper StopGather tag", function(){
      var stopGather = new StopGather();

      var response = new Response(stopGather);

      var expectedString = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><StopGather/></Response>';

      expect(response.toBxml()).toEqual(expectedString);
    });
  });
});
