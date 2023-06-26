import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface CustomParamOptions {
    name: string

    value: string
}

export class CustomParam implements CustomParamOptions, Verb {
    name: string

    value: string

    constructor(options: CustomParamOptions) {
        this.name = options.name
        this.value = options.value
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        attributes['name'] = this.name

        attributes['value'] = this.value

        xml.ele('CustomParam', attributes)
    }

}
