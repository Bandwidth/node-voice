import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Gather implements Verb {
    gatherUrl: string | undefined = undefined
    
    gatherMethod: string | undefined = undefined

    username: string | undefined = undefined

    password: string | undefined = undefined

    tag: string | undefined = undefined

    terminatingDigits: string | undefined = undefined

    maxDigits: number | undefined = undefined

    interDigitTimeout: number | undefined = undefined

    firstDigitTimeout: number | undefined = undefined

    audioProducers: Verb[] = []

    repeatCount: number | undefined = undefined

    gatherFallbackUrl: string | undefined = undefined

    gatherFallbackMethod: string | undefined = undefined

    fallbackUsername: string | undefined = undefined

    fallbackPassword: string | undefined = undefined


    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.gatherUrl !== undefined) {
            attributes['gatherUrl'] = this.gatherUrl
        }

        if (this.gatherMethod !== undefined) {
            attributes['gatherMethod'] = this.gatherMethod
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

        if (this.terminatingDigits !== undefined) {
            attributes['terminatingDigits'] = this.terminatingDigits
        }

        if (this.maxDigits !== undefined) {
            attributes['maxDigits'] = `${this.maxDigits}`
        }

        if (this.interDigitTimeout !== undefined) {
        attributes['interDigitTimeout'] = `${this.interDigitTimeout}`
        }

        if (this.firstDigitTimeout !== undefined) {
            attributes['firstDigitTimeout'] = `${this.firstDigitTimeout}`
        }

        if (this.repeatCount !== undefined) {
            attributes['repeatCount'] = `${this.repeatCount}`
        }

        if (this.gatherFallbackUrl !== undefined) {
            attributes['gatherFallbackUrl'] = this.gatherFallbackUrl
        }

        if (this.gatherFallbackMethod !== undefined) {
            attributes['gatherFallbackMethod'] = this.gatherFallbackMethod
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword
        }

        //Generating the element allows the SpeakSentence and PlayAudio
        //tags to be added easily
        var gather = xml.ele('Gather', attributes)

        if (Array.isArray(this.audioProducers)) {
            this.audioProducers.forEach( (verb) => {
                verb.addXml(gather)
            })            
        }
    }
}