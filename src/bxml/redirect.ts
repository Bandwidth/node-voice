import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface RedirectOptions {
    username?: string

    password?: string

    redirectUrl: string

    redirectMethod?: string

    tag?: string

    redirectFallbackUrl?: string

    redirectFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Redirect implements RedirectOptions, Verb {
    username?: string

    password?: string

    redirectUrl: string

    redirectMethod?: string

    tag?: string

    redirectFallbackUrl?: string

    redirectFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options: RedirectOptions) {
        this.fallbackPassword = options.fallbackPassword
        this.fallbackUsername = options.fallbackUsername
        this.password = options.password
        this.username = options.username
        this.tag = options.tag
        this.redirectFallbackMethod = options.redirectFallbackMethod
        this.redirectFallbackUrl = options.redirectFallbackUrl
        this.redirectMethod = options.redirectMethod
        this.redirectUrl = options.redirectUrl
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.redirectUrl !== undefined) {
            attributes['redirectUrl'] = this.redirectUrl
        }

        if (this.redirectMethod !== undefined) {
            attributes['redirectMethod'] = this.redirectMethod
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag
        }

        if (this.redirectFallbackUrl !== undefined) {
            attributes['redirectFallbackUrl'] = this.redirectFallbackUrl
        }

        if (this.redirectFallbackMethod !== undefined) {
            attributes['redirectFallbackMethod'] = this.redirectFallbackMethod
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword
        }

        xml.ele('Redirect', attributes)
    }
}