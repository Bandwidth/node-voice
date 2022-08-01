import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export class StopStream implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('StopStream')
    }
}