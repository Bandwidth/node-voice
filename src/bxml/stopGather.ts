import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export class StopGather implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('StopGather')
    }
}