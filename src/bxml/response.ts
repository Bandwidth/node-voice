import xmlbuilder from 'xmlbuilder'
import { Verb } from './Verb'


export class Response {

    verbs: Verb[] = []

    constructor(...verbs: Verb[]) {
        if (verbs)
            this.verbs = verbs
    }

    add(...verbs: Verb[]){
        this.verbs.push(...verbs)
    }

    toBxml() {
        const xml = xmlbuilder.create('Response', {
            version: '1.0',
            encoding: 'UTF-8'
        })

        for( const verb of this.verbs){
            verb.addXml(xml)
        }

        const re = /&lt;([a-zA-Z\/\/].*?)&gt;/g
        return xml.end().replaceAll(re, '<$1>')
    }
}
