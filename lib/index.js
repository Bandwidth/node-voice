/**
  * @module VoiceLib
  *
  * Bandwidth's HTTP voice platform
  */

'use strict';

const Configuration = require('./configuration');
const APIController = require('./Controllers/APIController');
const ApiCallResponse = require('./Models/ApiCallResponse');
const ApiCallStateResponse = require('./Models/ApiCallStateResponse');
const ApiCreateCallRequest = require('./Models/ApiCreateCallRequest');
const ApiModifyCallRequest = require('./Models/ApiModifyCallRequest');
const ApiTranscribeRecordingRequest = require('./Models/ApiTranscribeRecordingRequest');
const CallEngineModifyConferenceRequest = require('./Models/CallEngineModifyConferenceRequest');
const ModifyCallRecordingState = require('./Models/ModifyCallRecordingState');
const RecordingMetadataResponse = require('./Models/RecordingMetadataResponse');
const Transcript = require('./Models/Transcript');
const Transcription = require('./Models/Transcription');
const TranscriptionResponse = require('./Models/TranscriptionResponse');
const AnswerMethodEnum = require('./Models/AnswerMethodEnum');
const CallbackMethodEnum = require('./Models/CallbackMethodEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const DisconnectCauseEnum = require('./Models/DisconnectCauseEnum');
const DisconnectMethodEnum = require('./Models/DisconnectMethodEnum');
const FileFormatEnum = require('./Models/FileFormatEnum');
const RedirectMethodEnum = require('./Models/RedirectMethodEnum');
const StateEnum = require('./Models/StateEnum');
const State1Enum = require('./Models/State1Enum');
const State2Enum = require('./Models/State2Enum');
const StatusEnum = require('./Models/StatusEnum');
const Status1Enum = require('./Models/Status1Enum');
const Status2Enum = require('./Models/Status2Enum');
const ApiErrorResponseException = require('./Exceptions/ApiErrorResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of VoiceLib
    Configuration,
    // controllers of VoiceLib
    APIController,
    // models of VoiceLib
    ApiCallResponse,
    ApiCallStateResponse,
    ApiCreateCallRequest,
    ApiModifyCallRequest,
    ApiTranscribeRecordingRequest,
    CallEngineModifyConferenceRequest,
    ModifyCallRecordingState,
    RecordingMetadataResponse,
    Transcript,
    Transcription,
    TranscriptionResponse,
    AnswerMethodEnum,
    CallbackMethodEnum,
    DirectionEnum,
    DisconnectCauseEnum,
    DisconnectMethodEnum,
    FileFormatEnum,
    RedirectMethodEnum,
    StateEnum,
    State1Enum,
    State2Enum,
    StatusEnum,
    Status1Enum,
    Status2Enum,
    // exceptions of VoiceLib
    ApiErrorResponseException,
    APIException,
};

module.exports = initializer;
