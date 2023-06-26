import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StartTranscriptionOptions {
    name?: string
    
    tracks?: string
    
    transcriptionEventUrl?: string
    
    transcriptionEventMethod?: string
    
    username?: string
    
    password?: string
    
    destination?: string
    
    stabilized?: boolean

    customParams?: Verb[]
}

export class StartTranscription implements StartTranscriptionOptions, Verb {
  
    name?: string
    
    tracks?: string
    
    transcriptionEventUrl?: string
    
    transcriptionEventMethod?: string
    
    username?: string
    
    password?: string
    
    destination?: string
    
    stabilized?: boolean
    
    customParams?: Verb[]

    constructor(options: StartTranscriptionOptions) {
        this.name = options.name
        this.tracks = options.tracks
        this.transcriptionEventUrl = options.transcriptionEventUrl
        this.customParams = options.customParams || []
        this.transcriptionEventMethod = options.transcriptionEventMethod
        this.username = options.username
        this.password = options.password
        this.destination = options.destination
        this.stabilized = options.stabilized
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}
        
        if (this.name !== undefined) {
            attributes['name'] = this.name
        }
        
        if (this.tracks !== undefined) {
            attributes['tracks'] = this.tracks
        }
        if (this.transcriptionEventUrl !== undefined) {
            attributes['transcriptionEventUrl'] = this.transcriptionEventUrl
        }
        
        if (this.transcriptionEventMethod !== undefined) {
            attributes['transcriptionEventMethod'] = this.transcriptionEventMethod
        }
        
        if (this.username !== undefined) {
            attributes['username'] = this.username
        }
        
        if (this.password !== undefined) {
            attributes['password'] = this.password
        }
        
        if (this.destination !== undefined) {
            attributes['destination'] = this.destination
        }

        if (this.stabilized !== undefined) {
            attributes['stabilized'] = `${this.stabilized}`
        }

        var StartTranscription = xml.ele('StartTranscription', attributes)
        
        if (Array.isArray(this.customParams)) {
            this.customParams.forEach( (verb) => {
                verb.addXml(StartTranscription)
            })            
        }
    }

}
