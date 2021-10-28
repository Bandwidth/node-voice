import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface RingOptions {
    duration?: number
    answerCall?: boolean
}

export class Ring implements RingOptions, Verb {
    duration?: number
    answerCall?: boolean

    constructor(options?: RingOptions) {
        this.duration = options?.duration
        this.answerCall = options?.answerCall
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.duration !== undefined) {
            attributes['duration'] = `${this.duration}`
        }
        if (this.answerCall !== undefined) {
            attributes['answerCall'] = `${this.answerCall}`
        }

        xml.ele('Ring', attributes)
    }
}
