import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface GatherOptions {
    gatherUrl?: string
    
    gatherMethod?: string

    username?: string

    password?: string

    tag?: string

    terminatingDigits?: string

    maxDigits?: number

    interDigitTimeout?: number

    firstDigitTimeout?: number

    audioProducers?: Verb[]

    repeatCount?: number

    gatherFallbackUrl?: string

    gatherFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Gather implements GatherOptions, Verb {
    gatherUrl?: string
    
    gatherMethod?: string

    username?: string

    password?: string

    tag?: string

    terminatingDigits?: string

    maxDigits?: number

    interDigitTimeout?: number

    firstDigitTimeout?: number

    audioProducers: Verb[]

    repeatCount?: number

    gatherFallbackUrl?: string

    gatherFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options?: GatherOptions) {
        this.gatherUrl = options?.gatherUrl
        this.gatherMethod = options?.gatherMethod
        this.username = options?.username
        this.password = options?.password
        this.tag = options?.tag
        this.terminatingDigits = options?.terminatingDigits
        this.maxDigits = options?.maxDigits
        this.interDigitTimeout = options?.interDigitTimeout
        this.firstDigitTimeout = options?.firstDigitTimeout
        this.audioProducers = options?.audioProducers || []
        this.repeatCount = options?.repeatCount
        this.gatherFallbackUrl = options?.gatherFallbackUrl
        this.gatherFallbackMethod = options?.gatherFallbackMethod
        this.fallbackUsername = options?.fallbackUsername
        this.fallbackPassword = options?.fallbackPassword
    }


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