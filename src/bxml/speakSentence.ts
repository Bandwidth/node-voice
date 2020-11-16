import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class SpeakSentence implements Verb {
    sentence: string | undefined

    locale: string | undefined

    voice: string | undefined

    gender: string | undefined

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