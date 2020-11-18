import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StartGatherOptions {
    dtmfUrl: string

    dtmfMethod?: string

    username?: string

    password?: string

    tag?: string
}

export class StartGather implements StartGatherOptions, Verb {
    dtmfUrl: string

    dtmfMethod?: string

    username?: string

    password?: string

    tag?: string

    constructor(options: StartGatherOptions){
        this.dtmfUrl = options.dtmfUrl
        this.dtmfMethod = options.dtmfMethod
        this.username = options.username
        this.password = options.password
        this.tag = options.tag
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.dtmfUrl !== undefined) {
            attributes['dtmfUrl'] = this.dtmfUrl
        }

        if (this.dtmfMethod !== undefined) {
            attributes['dtmfMethod'] = this.dtmfMethod
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag
        }

        xml.ele("StartGather", attributes)
    }

}