import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Hangup implements Verb {
    addXml(xml: XMLElement) {
        xml.ele('Hangup')
    }
}