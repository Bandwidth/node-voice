import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StreamParamOptions {
    name?: string

    value?: string
}

export class StreamParam implements StreamParamOptions, Verb {
    name?: string

    value?: string

    constructor(options: StreamParamOptions) {
        this.name = options.name
        this.value = options.value
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.name !== undefined) {
            attributes['name'] = this.name
        }

        if (this.value !== undefined) {
            attributes['tracks'] = this.value
        }

        xml.ele('StreamParam', attributes)
    }

}