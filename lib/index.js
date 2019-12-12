/**
  * @module VoiceLib
  *
  * Bandwidth's HTTP voice platform
  */

'use strict';

const Configuration = require('./configuration');
const APIController = require('./Controllers/APIController');
const ApiCallResponse = require('./Models/ApiCallResponse');
const ApiCreateCallRequest = require('./Models/ApiCreateCallRequest');
const ApiGetAccountRecordingsMetadataRequest =
  require('./Models/ApiGetAccountRecordingsMetadataRequest');
const ApiModifyCallRequest = require('./Models/ApiModifyCallRequest');
const ModifyCallRecordingState = require('./Models/ModifyCallRecordingState');
const RecordingMetadataResponse = require('./Models/RecordingMetadataResponse');
const AnswerMethodEnum = require('./Models/AnswerMethodEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const DisconnectMethodEnum = require('./Models/DisconnectMethodEnum');
const FileFormatEnum = require('./Models/FileFormatEnum');
const RedirectMethodEnum = require('./Models/RedirectMethodEnum');
const StateEnum = require('./Models/StateEnum');
const State1Enum = require('./Models/State1Enum');
const TranscriptionStatusEnum = require('./Models/TranscriptionStatusEnum');
const TypeEnum = require('./Models/TypeEnum');
const ErrorResponseException = require('./Exceptions/ErrorResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of VoiceLib
    Configuration,
    // controllers of VoiceLib
    APIController,
    // models of VoiceLib
    ApiCallResponse,
    ApiCreateCallRequest,
    ApiGetAccountRecordingsMetadataRequest,
    ApiModifyCallRequest,
    ModifyCallRecordingState,
    RecordingMetadataResponse,
    AnswerMethodEnum,
    DirectionEnum,
    DisconnectMethodEnum,
    FileFormatEnum,
    RedirectMethodEnum,
    StateEnum,
    State1Enum,
    TranscriptionStatusEnum,
    TypeEnum,
    // exceptions of VoiceLib
    ErrorResponseException,
    APIException,
};

module.exports = initializer;
