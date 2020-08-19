/**
  * @module VoiceLib
  *
  * Bandwidth's HTTP voice platform
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const APIController = require('./Controllers/APIController');
const ApiCallResponse = require('./Models/ApiCallResponse');
const ApiCallStateResponse = require('./Models/ApiCallStateResponse');
const ApiCreateCallRequest = require('./Models/ApiCreateCallRequest');
const ApiModifyCallRequest = require('./Models/ApiModifyCallRequest');
const CallEngineModifyConferenceRequest = require('./Models/CallEngineModifyConferenceRequest');
const ApiTranscribeRecordingRequest = require('./Models/ApiTranscribeRecordingRequest');
const ConferenceDetail = require('./Models/ConferenceDetail');
const ConferenceMemberDetail = require('./Models/ConferenceMemberDetail');
const ConferenceRecordingMetadataResponse = require('./Models/ConferenceRecordingMetadataResponse');
const ModifyCallRecordingState = require('./Models/ModifyCallRecordingState');
const RecordingMetadataResponse = require('./Models/RecordingMetadataResponse');
const Transcript = require('./Models/Transcript');
const Transcription = require('./Models/Transcription');
const TranscriptionResponse = require('./Models/TranscriptionResponse');
const AnswerFallbackMethodEnum = require('./Models/AnswerFallbackMethodEnum');
const AnswerMethodEnum = require('./Models/AnswerMethodEnum');
const CallbackMethodEnum = require('./Models/CallbackMethodEnum');
const ConferenceEventMethodEnum = require('./Models/ConferenceEventMethodEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const DisconnectCauseEnum = require('./Models/DisconnectCauseEnum');
const DisconnectMethodEnum = require('./Models/DisconnectMethodEnum');
const FileFormatEnum = require('./Models/FileFormatEnum');
const RedirectFallbackMethodEnum = require('./Models/RedirectFallbackMethodEnum');
const RedirectMethodEnum = require('./Models/RedirectMethodEnum');
const StateEnum = require('./Models/StateEnum');
const State1Enum = require('./Models/State1Enum');
const State2Enum = require('./Models/State2Enum');
const StatusEnum = require('./Models/StatusEnum');
const Status1Enum = require('./Models/Status1Enum');
const Status3Enum = require('./Models/Status3Enum');
const ApiErrorResponseException = require('./Exceptions/ApiErrorResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of VoiceLib
    Configuration,
    Environments,
    // controllers of VoiceLib
    APIController,
    // models of VoiceLib
    ApiCallResponse,
    ApiCallStateResponse,
    ApiCreateCallRequest,
    ApiModifyCallRequest,
    CallEngineModifyConferenceRequest,
    ApiTranscribeRecordingRequest,
    ConferenceDetail,
    ConferenceMemberDetail,
    ConferenceRecordingMetadataResponse,
    ModifyCallRecordingState,
    RecordingMetadataResponse,
    Transcript,
    Transcription,
    TranscriptionResponse,
    AnswerFallbackMethodEnum,
    AnswerMethodEnum,
    CallbackMethodEnum,
    ConferenceEventMethodEnum,
    DirectionEnum,
    DisconnectCauseEnum,
    DisconnectMethodEnum,
    FileFormatEnum,
    RedirectFallbackMethodEnum,
    RedirectMethodEnum,
    StateEnum,
    State1Enum,
    State2Enum,
    StatusEnum,
    Status1Enum,
    Status3Enum,
    // exceptions of VoiceLib
    ApiErrorResponseException,
    APIException,
};

module.exports = initializer;
