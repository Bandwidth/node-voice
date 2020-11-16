import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class PauseRecording implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('PauseRecording');
        return xml;
    }
}