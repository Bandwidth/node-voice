import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export interface PlayAudioOptions {
    url: string

    username?: string

    password?: string 
}

export class PlayAudio implements PlayAudioOptions, Verb {
    url: string

    username?: string

    password?: string 

    constructor(options: PlayAudioOptions) {
        this.username = options.username
        this.password = options.password
        this.url = options.url
    }

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