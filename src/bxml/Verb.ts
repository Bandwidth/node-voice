import { XMLElement } from 'xmlbuilder';

export interface Verb {
    addXml(xml: XMLElement): void
}