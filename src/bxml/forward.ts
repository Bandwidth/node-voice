import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface ForwardOptions {
    to: string
    
    from?: string

    callTimeout?: string

    diversionTreatment?: string

    diversionReason?: string

    uui?: string
}

export class Forward implements ForwardOptions, Verb {
    to: string
    
    from?: string

    callTimeout?: string

    diversionTreatment?: string

    diversionReason?: string

    uui?: string

    constructor(options: ForwardOptions) {
        this.to = options.to
        this.from = options.from
        this.callTimeout = options.callTimeout
        this.diversionReason = options.diversionReason
        this.diversionTreatment = options.diversionTreatment
        this.uui = options.uui
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.to !== undefined) {
            attributes['to'] = this.to
        }

        if (this.from !== undefined) {
            attributes['from'] = this.from
        }

        if (this.callTimeout !== undefined) {
            attributes['callTimeout'] = this.callTimeout
        }

        if (this.diversionTreatment !== undefined) {
            attributes['diversionTreatment'] = this.diversionTreatment
        }

        if (this.diversionReason !== undefined) {
            attributes['diversionReason'] = this.diversionReason
        }

        if (this.uui !== undefined) {
            attributes['uui'] = this.uui
        }

        xml.ele('Forward', attributes)
    }
}