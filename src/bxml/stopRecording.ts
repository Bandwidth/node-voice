import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class StopRecording implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('StopRecording')
        return xml
    }
}