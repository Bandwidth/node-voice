import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export class PauseRecording implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('PauseRecording')
    }
}