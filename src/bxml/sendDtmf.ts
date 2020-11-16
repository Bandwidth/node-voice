import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class SendDtmf implements Verb {
    dtmf?: string

    toneDuration?: number

    toneInterval?: number

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