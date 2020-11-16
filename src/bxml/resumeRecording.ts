import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class ResumeRecording implements Verb {

    addXml(xml: XMLElement) {
        xml.ele('ResumeRecording')
        return xml
    }
}