import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Conference implements Verb {
    name = ''

    username: string | undefined

    password: string | undefined

    tag: string | undefined

    mute: string | undefined

    hold: string | undefined

    callIdsToCoach: string[] | undefined = []

    conferenceEventUrl: string | undefined

    conferenceEventMethod: string | undefined

    conferenceEventFallbackUrl: string | undefined

    conferenceEventFallbackMethod: string | undefined

    fallbackUsername: string | undefined

    fallbackPassword: string | undefined

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