import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface StartRecordingOptions {
    recordingAvailableUrl?: string

    recordingAvailableMethod?: string

    username?: string

    password?: string

    tag?: string

    fileFormat?: string

    multiChannel?: boolean

    transcribe?: string

    detectLanguage?: boolean

    transcriptionAvailableUrl?: string

    transcriptionAvailableMethod?: string
}

export class StartRecording implements StartRecordingOptions, Verb {
    recordingAvailableUrl?: string

    recordingAvailableMethod?: string

    username?: string

    password?: string

    tag?: string

    fileFormat?: string

    multiChannel?: boolean

    detectLanguage?: boolean

    transcribe?: string

    transcriptionAvailableUrl?: string

    transcriptionAvailableMethod?: string

    constructor(options?: StartRecordingOptions){
        this.recordingAvailableUrl = options?.recordingAvailableUrl
        this.recordingAvailableMethod = options?.recordingAvailableMethod
        this.username = options?.username
        this.password = options?.password
        this.tag = options?.tag
        this.fileFormat = options?.fileFormat
        this.multiChannel = options?.multiChannel
        this.transcribe = options?.transcribe
        this.detectLanguage = options?.detectLanguage
        this.transcriptionAvailableUrl = options?.transcriptionAvailableUrl
        this.transcriptionAvailableMethod = options?.transcriptionAvailableMethod
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.recordingAvailableUrl !== undefined) {
            attributes['recordingAvailableUrl'] = this.recordingAvailableUrl
        }

        if (this.recordingAvailableMethod !== undefined) {
            attributes['recordingAvailableMethod'] = this.recordingAvailableMethod
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag
        }

        if (this.fileFormat !== undefined) {
            attributes['fileFormat'] = this.fileFormat
        }

        if (this.multiChannel !== undefined) {
            attributes['multiChannel'] = `${this.multiChannel}`
        }

        if (this.detectLanguage !== undefined) {
            attributes['detectLanguage'] = `${this.detectLanguage}`
        }

        if (this.transcribe !== undefined) {
            attributes['transcribe'] = this.transcribe
        }

        if (this.transcriptionAvailableUrl !== undefined) {
            attributes['transcriptionAvailableUrl'] = this.transcriptionAvailableUrl
        }

        if (this.transcriptionAvailableMethod !== undefined) {
            attributes['transcriptionAvailableMethod'] = this.transcriptionAvailableMethod
        }

        xml.ele('StartRecording', attributes)
    }
}
