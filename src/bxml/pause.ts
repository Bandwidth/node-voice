import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Pause implements Verb {
    duration?: string

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}


        if (this.duration !== null) {
            attributes['duration'] = `${this.duration}`
        }

        xml.ele('Pause', attributes)
        
    }
}