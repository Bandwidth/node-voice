import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export interface ConferenceOptions {
    name: string

    username?: string

    password?: string

    tag?: string

    mute?: string

    hold?: string

    callIdsToCoach: string[] | undefined = []

    conferenceEventUrl?: string

    conferenceEventMethod?: string

    conferenceEventFallbackUrl?: string

    conferenceEventFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Conference implements ConferenceOptions, Verb {
    name: string

    username?: string

    password?: string

    tag?: string

    mute?: string

    hold?: string

    callIdsToCoach: string[] = []

    conferenceEventUrl?: string

    conferenceEventMethod?: string

    conferenceEventFallbackUrl?: string

    conferenceEventFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options: ConferenceOptions) {
        this.name = options.name
        this.username = options.username
        this.password = options.password
        this.tag = options.tag
        this.mute = options.mute
        this.hold = options.hold
        this.callIdsToCoach = options.callIdsToCoach || []
        this.conferenceEventUrl = options.conferenceEventUrl
        this.conferenceEventMethod = options.conferenceEventMethod
        this.conferenceEventFallbackUrl = options.conferenceEventFallbackUrl
        this.conferenceEventFallbackMethod = options.conferenceEventFallbackMethod
        this.fallbackUsername = options.fallbackUsername
        this.fallbackPassword = options.fallbackPassword
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.username !== undefined) {
            attributes['username'] = this.username;
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password;
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag;
        }

        if (this.mute !== undefined) {
            attributes['mute'] = this.mute;
        }

        if (this.hold !== undefined) {
            attributes['hold'] = this.hold;
        }

        if (this.callIdsToCoach !== undefined) {
            attributes['callIdsToCoach'] = this.callIdsToCoach.join(',');
        }

        if (this.conferenceEventUrl !== undefined) {
            attributes['conferenceEventUrl'] = this.conferenceEventUrl;
        }

        if (this.conferenceEventMethod !== undefined) {
            attributes['conferenceEventMethod'] = this.conferenceEventMethod;
        }

        if (this.conferenceEventFallbackUrl !== undefined) {
            attributes['conferenceEventFallbackUrl'] = this.conferenceEventFallbackUrl;
        }

        if (this.conferenceEventFallbackMethod !== undefined) {
            attributes['conferenceEventFallbackMethod'] = this.conferenceEventFallbackMethod;
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername;
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword;
        }

        xml.ele('Conference', attributes, this.name);

    }
}