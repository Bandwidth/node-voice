import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StopTranscriptionOptions {
    name?: string
}

export class StopTranscription implements StopTranscriptionOptions, Verb {
    name?: string

    constructor(options: StopTranscriptionOptions) {
        this.name = options.name
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.name !== undefined) {
            attributes['name'] = this.name
        }

        xml.ele('StopTranscription', attributes)
        
    }

}
