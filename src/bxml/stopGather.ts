import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class StopGather implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('StopGather')
        return xml
    }
}