import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class StartGather implements Verb {
    dtmfUrl: string | undefined

    dtmfMethod: string | undefined

    username: string | undefined

    password: string | undefined

    tag: string | undefined

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