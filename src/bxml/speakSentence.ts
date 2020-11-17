import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export interface SpeakSentenceOptions {
    sentence: string

    locale?: string

    voice?: string

    gender?: string
}

export class SpeakSentence implements SpeakSentenceOptions, Verb {
    sentence: string

    locale?: string

    voice?: string

    gender?: string

    constructor(options: SpeakSentenceOptions) {
        this.sentence = options.sentence
        this.locale = options.locale
        this.voice = options.voice
        this.gender = options.gender
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.voice !== undefined) {
            attributes['voice'] = this.voice
        }

        if (this.locale !== undefined) {
            attributes['locale'] = this.locale
        }

        if (this.gender !== undefined) {
            attributes['gender'] = this.gender
        }

        xml.ele('SpeakSentence', attributes, this.sentence)
    }

}