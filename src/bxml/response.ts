import xmlbuilder from 'xmlbuilder';
import { Verb } from './interfaces';

export class Response {

    verbs: Verb[] = []

    constructor(...verbs: Verb[]) {
        if (verbs)
            this.verbs = verbs
    }

    add(verb: Verb){
        this.verbs.push(verb)
    }

    toBxml() {
        const xml = xmlbuilder.create('Response', {
            version: '1.0',
            encoding: 'UTF-8'
        })

        for( const verb of this.verbs){
            verb.addXml(xml)
        }

        return xml.end()
    }
}