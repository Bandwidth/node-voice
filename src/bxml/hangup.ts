import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export class Hangup implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('Hangup')
    }
}