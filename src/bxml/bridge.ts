import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Bridge implements Verb {

    callId: string | undefined = undefined

    bridgeCompleteUrl: string | undefined = undefined

    bridgeCompleteMethod: string | undefined = undefined

    bridgeTargetCompleteUrl: string | undefined = undefined

    bridgeTargetCompleteMethod: string | undefined = undefined

    username: string | undefined = undefined

    password: string | undefined = undefined

    tag: string | undefined = undefined

    bridgeCompleteFallbackUrl: string | undefined = undefined

    bridgeCompleteFallbackMethod: string | undefined = undefined

    bridgeTargetCompleteFallbackUrl: string | undefined = undefined

    bridgeTargetCompleteFallbackMethod: string | undefined = undefined

    fallbackUsername: string | undefined = undefined

    fallbackPassword: string | undefined = undefined

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.bridgeCompleteUrl !== undefined) {
            attributes['bridgeCompleteUrl'] = this.bridgeCompleteUrl;
        }

        if (this.bridgeCompleteMethod !== undefined) {
            attributes['bridgeCompleteMethod'] = this.bridgeCompleteMethod;
        }

        if (this.bridgeTargetCompleteUrl !== undefined) {
            attributes['bridgeTargetCompleteUrl'] = this.bridgeTargetCompleteUrl;
        }

        if (this.bridgeTargetCompleteMethod !== undefined) {
            attributes['bridgeTargetCompleteMethod'] = this.bridgeTargetCompleteMethod;
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username;
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password;
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag;
        }

        if (this.bridgeCompleteFallbackUrl !== undefined) {
            attributes['bridgeCompleteFallbackUrl'] = this.bridgeCompleteFallbackUrl;
        }

        if (this.bridgeCompleteFallbackMethod !== undefined) {
            attributes['bridgeCompleteFallbackMethod'] = this.bridgeCompleteFallbackMethod;
        }

        if (this.bridgeTargetCompleteFallbackUrl !== undefined) {
            attributes['bridgeTargetCompleteFallbackUrl'] = this.bridgeTargetCompleteFallbackUrl;
        }

        if (this.bridgeTargetCompleteFallbackMethod !== undefined) {
            attributes['bridgeTargetCompleteFallbackMethod'] = this.bridgeTargetCompleteFallbackMethod;
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername;
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword;
        }

        xml.ele('Bridge', attributes, this.callId);
    }
}