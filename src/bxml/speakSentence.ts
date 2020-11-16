import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class SpeakSentence implements Verb {
    sentence?: string

    locale?: string

    voice?: string

    gender?: string

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