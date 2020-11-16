import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Conference implements Verb {
    name = ''

    username: string | undefined = undefined

    password: string | undefined = undefined

    tag: string | undefined = undefined

    mute: string | undefined = undefined

    hold: string | undefined = undefined

    callIdsToCoach: string[] | undefined = []

    conferenceEventUrl: string | undefined = undefined

    conferenceEventMethod: string | undefined = undefined

    conferenceEventFallbackUrl: string | undefined = undefined

    conferenceEventFallbackMethod: string | undefined = undefined

    fallbackUsername: string | undefined = undefined

    fallbackPassword: string | undefined = undefined

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