import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StreamParamOptions {
    name: string

    value: string
}

export class StreamParam implements StreamParamOptions, Verb {
    name: string

    value: string

    constructor(options: StreamParamOptions) {
        this.name = options.name
        this.value = options.value
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        attributes['name'] = this.name

        attributes['value'] = this.value

        xml.ele('StreamParam', attributes)
    }

}
