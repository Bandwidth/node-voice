import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface RingOptions {
    duration?: number
}

export class Ring implements RingOptions, Verb {
    duration?: number

    constructor(options?: RingOptions) {
        this.duration = options?.duration
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.duration !== undefined) {
            attributes['duration'] = `${this.duration}`
        }

        xml.ele('Ring', attributes)
    }
}