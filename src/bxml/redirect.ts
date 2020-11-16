import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Redirect implements Verb {
    username: string | undefined = undefined

    password: string | undefined = undefined

    redirectUrl: string | undefined = undefined

    redirectMethod: string | undefined = undefined

    tag: string | undefined = undefined

    redirectFallbackUrl: string | undefined = undefined

    redirectFallbackMethod: string | undefined = undefined

    fallbackUsername: string | undefined = undefined

    fallbackPassword: string | undefined = undefined

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