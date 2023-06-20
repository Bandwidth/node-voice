import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StartStreamOptions {
    destination: string

    name?: string

    tracks?: string

    streamEventUrl?: string

    streamParams?: Verb[]
    
    streamEventMethod?: string
    
    username?: string
    
    password?: string
}

export class StartStream implements StartStreamOptions, Verb {
    destination: string

    name?: string

    tracks?: string

    streamEventUrl?: string

    streamParams?: Verb[]
    
    streamEventMethod?: string
    
    username?: string
    
    password?: string

    constructor(options: StartStreamOptions) {
        this.destination = options.destination
        this.name = options.name
        this.tracks = options.tracks
        this.streamEventUrl = options.streamEventUrl
        this.streamParams = options.streamParams || []
        this.streamEventMethod = options.streamEventMethod
        this.username = options.username
        this.password = options.password
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        attributes['destination'] = this.destination

        if (this.name !== undefined) {
            attributes['name'] = this.name
        }

        if (this.tracks !== undefined) {
            attributes['tracks'] = this.tracks
        }
        if (this.streamEventUrl !== undefined) {
            attributes['streamEventUrl'] = this.streamEventUrl
        }

        if (this.streamEventMethod !== undefined) {
            attributes['streamEventMethod'] = this.streamEventMethod
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        var startStream = xml.ele('StartStream', attributes)

        if (Array.isArray(this.streamParams)) {
            this.streamParams.forEach( (verb) => {
                verb.addXml(startStream)
            })            
        }
    }

}
