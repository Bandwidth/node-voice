import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class PlayAudio implements Verb {
    url?: string

    username?: string

    password?: string 

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        xml.ele('PlayAudio', attributes, this.url)
    }
}