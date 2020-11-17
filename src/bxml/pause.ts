import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export interface PauseOptions {
    duration?: number
}

export class Pause implements PauseOptions, Verb {
    duration?: number

    constructor(options: PauseOptions) {
        this.duration = options.duration
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}


        if (this.duration !== null) {
            attributes['duration'] = `${this.duration}`
        }

        xml.ele('Pause', attributes)
        
    }
}