import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export interface SendDtmfOptions {
    dtmf: string

    toneDuration?: number

    toneInterval?: number
}

export class SendDtmf implements SendDtmfOptions, Verb {
    dtmf: string

    toneDuration?: number

    toneInterval?: number

    constructor(options: SendDtmfOptions) {
        this.dtmf = options.dtmf
        this.toneDuration = options.toneDuration
        this.toneInterval = options.toneInterval
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.toneDuration !== undefined) {
            attributes['toneDuration'] = `${this.toneDuration}`
        }

        if (this.toneInterval !== undefined) {
            attributes['toneInterval'] = `${this.toneInterval}`
        }

        xml.ele('SendDtmf', attributes, this.dtmf)
    }
}