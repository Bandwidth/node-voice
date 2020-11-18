import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface BridgeOptions {
    callId: string

    bridgeCompleteUrl?: string

    bridgeCompleteMethod?: string

    bridgeTargetCompleteUrl?: string

    bridgeTargetCompleteMethod?: string

    username?: string

    password?: string

    tag?: string

    bridgeCompleteFallbackUrl?: string

    bridgeCompleteFallbackMethod?: string

    bridgeTargetCompleteFallbackUrl?: string

    bridgeTargetCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Bridge implements BridgeOptions, Verb {

    callId: string

    bridgeCompleteUrl?: string

    bridgeCompleteMethod?: string

    bridgeTargetCompleteUrl?: string

    bridgeTargetCompleteMethod?: string

    username?: string

    password?: string

    tag?: string

    bridgeCompleteFallbackUrl?: string

    bridgeCompleteFallbackMethod?: string

    bridgeTargetCompleteFallbackUrl?: string

    bridgeTargetCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options: BridgeOptions) {
        this.callId = options.callId
        this.bridgeCompleteUrl = options.bridgeCompleteUrl
        this.bridgeCompleteMethod = options.bridgeCompleteMethod
        this.bridgeTargetCompleteUrl = options.bridgeTargetCompleteUrl
        this.bridgeTargetCompleteMethod = options.bridgeTargetCompleteMethod
        this.username = options.username
        this.password = options.password
        this.tag = options.tag
        this.bridgeCompleteFallbackUrl = options.bridgeCompleteFallbackUrl
        this.bridgeCompleteFallbackMethod = options.bridgeCompleteFallbackMethod
        this.bridgeTargetCompleteFallbackUrl = options.bridgeTargetCompleteFallbackUrl
        this.bridgeTargetCompleteFallbackMethod = options.bridgeTargetCompleteFallbackMethod
        this.fallbackUsername = options.fallbackUsername
        this.fallbackPassword = options.fallbackPassword
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.bridgeCompleteUrl !== undefined) {
            attributes['bridgeCompleteUrl'] = this.bridgeCompleteUrl
        }

        if (this.bridgeCompleteMethod !== undefined) {
            attributes['bridgeCompleteMethod'] = this.bridgeCompleteMethod
        }

        if (this.bridgeTargetCompleteUrl !== undefined) {
            attributes['bridgeTargetCompleteUrl'] = this.bridgeTargetCompleteUrl
        }

        if (this.bridgeTargetCompleteMethod !== undefined) {
            attributes['bridgeTargetCompleteMethod'] = this.bridgeTargetCompleteMethod
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag
        }

        if (this.bridgeCompleteFallbackUrl !== undefined) {
            attributes['bridgeCompleteFallbackUrl'] = this.bridgeCompleteFallbackUrl
        }

        if (this.bridgeCompleteFallbackMethod !== undefined) {
            attributes['bridgeCompleteFallbackMethod'] = this.bridgeCompleteFallbackMethod
        }

        if (this.bridgeTargetCompleteFallbackUrl !== undefined) {
            attributes['bridgeTargetCompleteFallbackUrl'] = this.bridgeTargetCompleteFallbackUrl
        }

        if (this.bridgeTargetCompleteFallbackMethod !== undefined) {
            attributes['bridgeTargetCompleteFallbackMethod'] = this.bridgeTargetCompleteFallbackMethod
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword
        }

        xml.ele('Bridge', attributes, this.callId)
    }
}