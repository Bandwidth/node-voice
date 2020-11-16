import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Ring implements Verb {
    duration: string | undefined

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.duration !== undefined) {
            attributes['duration'] = this.duration
        }

        xml.ele('Ring', attributes)
    }
}