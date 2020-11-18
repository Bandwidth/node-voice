import { XMLElement } from 'xmlbuilder';
import { Verb } from './Verb';

export class StopRecording implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('StopRecording')
        return xml
    }
}