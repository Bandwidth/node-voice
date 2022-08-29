import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StopStreamOptions {
    name: string
}

export class StopStream implements StopStreamOptions, Verb {
    name: string

    constructor(options: StopStreamOptions) {
        this.name = options.name
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}


        if (this.name !== null) {
            attributes['name'] = `${this.name}`
        }

        xml.ele('StopStream', attributes)
        
    }

}