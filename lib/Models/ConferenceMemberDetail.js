/**
 * VoiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ConferenceMemberDetail
 */
class ConferenceMemberDetail extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.callId = this.constructor.getValue(obj.callId);
        this.conferenceId = this.constructor.getValue(obj.conferenceId);
        this.memberUrl = this.constructor.getValue(obj.memberUrl);
        this.mute = this.constructor.getValue(obj.mute);
        this.hold = this.constructor.getValue(obj.hold);
        this.callIdsToCoach = this.constructor.getValue(obj.callIdsToCoach);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'callId', realName: 'callId' },
            { name: 'conferenceId', realName: 'conferenceId' },
            { name: 'memberUrl', realName: 'memberUrl' },
            { name: 'mute', realName: 'mute' },
            { name: 'hold', realName: 'hold' },
            { name: 'callIdsToCoach', realName: 'callIdsToCoach', array: true },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = ConferenceMemberDetail;