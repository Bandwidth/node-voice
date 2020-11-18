import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export class ResumeRecording implements Verb {

    addXml(xml: XMLElement) {
        xml.ele('ResumeRecording')
    }
}