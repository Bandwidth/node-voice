import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface TagOptions {
    value: string
}

export class Tag implements TagOptions, Verb {
    value: string

    constructor(options: TagOptions) {
        this.value = options.value
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        xml.ele('Tag', attributes, this.value)
        
    }
}