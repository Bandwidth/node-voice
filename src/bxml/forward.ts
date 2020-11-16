import { XMLElement } from 'xmlbuilder';
import { Verb } from './interfaces';

export class Forward implements Verb {
    to: string | undefined
    
    from: string | undefined

    callTimeout: string | undefined

    diversionTreatment: string | undefined

    diversionReason: string | undefined

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.to !== undefined) {
            attributes['to'] = this.to;
        }

        if (this.from !== undefined) {
            attributes['from'] = this.from;
        }

        if (this.callTimeout !== undefined) {
            attributes['callTimeout'] = this.callTimeout;
        }

        if (this.diversionTreatment !== undefined) {
            attributes['diversionTreatment'] = this.diversionTreatment;
        }

        if (this.diversionReason !== undefined) {
            attributes['diversionReason'] = this.diversionReason;
        }

        xml.ele('Forward', attributes);
    }
}