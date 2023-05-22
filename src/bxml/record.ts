import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface RecordOptions {
    recordCompleteUrl?: string

    recordCompleteMethod?: string

    recordingAvailableUrl?: string

    recordingAvailableMethod?: string

    username?: string

    password?: string

    tag?: string

    terminatingDigits?: string

    maxDuration?: number

    fileFormat?: string

    transcribe: boolean | undefined
  
    detectLanguage?: boolean 

    transcriptionAvailableUrl?: string

    transcriptionAvailableMethod?: string

    silenceTimeout?: number

    recordCompleteFallbackUrl?: string

    recordCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Record implements RecordOptions, Verb {
    recordCompleteUrl?: string

    recordCompleteMethod?: string

    recordingAvailableUrl?: string

    recordingAvailableMethod?: string

    username?: string

    password?: string

    tag?: string

    terminatingDigits?: string

    maxDuration?: number

    fileFormat?: string

    transcribe: boolean | undefined
  
    detectLanguage?: boolean 

    transcriptionAvailableUrl?: string

    transcriptionAvailableMethod?: string

    silenceTimeout?: number

    recordCompleteFallbackUrl?: string

    recordCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options?: RecordOptions) {
        this.recordCompleteUrl = options?.recordCompleteUrl
        this.recordCompleteMethod = options?.recordCompleteMethod
        this.recordingAvailableUrl = options?.recordingAvailableUrl
        this.recordingAvailableMethod = options?.recordingAvailableMethod
        this.username = options?.username
        this.password = options?.password
        this.tag = options?.tag
        this.terminatingDigits = options?.terminatingDigits
        this.maxDuration= options?.maxDuration
        this.fileFormat = options?.fileFormat
        this.transcribe = options?.transcribe
        this.detectLanguage = options?.detectLanguage
        this.transcriptionAvailableUrl = options?.transcriptionAvailableUrl
        this.transcriptionAvailableMethod = options?.transcriptionAvailableMethod
        this.silenceTimeout = options?.silenceTimeout
        this.recordCompleteFallbackUrl = options?.recordCompleteFallbackUrl
        this.recordCompleteFallbackMethod = options?.recordCompleteFallbackMethod
        this.fallbackUsername = options?.fallbackUsername
        this.fallbackPassword = options?.fallbackPassword
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.recordCompleteUrl !== undefined) {
            attributes['recordCompleteUrl'] = this.recordCompleteUrl
        }

        if (this.recordCompleteMethod !== undefined) {
            attributes['recordCompleteMethod'] = this.recordCompleteMethod
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

        if (this.terminatingDigits !== undefined) {
            attributes['terminatingDigits'] = this.terminatingDigits
        }

        if (this.maxDuration !== undefined) {
            attributes['maxDuration'] = `${this.maxDuration}`
        }

        if (this.fileFormat !== undefined) {
            attributes['fileFormat'] = this.fileFormat
        }

        if (this.detectLanguage !== undefined) {
            attributes['detectLanguage'] = `${this.detectLanguage}`
        }

        if (this.transcribe !== undefined) {
            attributes['transcribe'] = `${this.transcribe}`
        }

        if (this.transcriptionAvailableUrl !== undefined) {
            attributes['transcriptionAvailableUrl'] = this.transcriptionAvailableUrl
        }

        if (this.transcriptionAvailableMethod !== undefined) {
            attributes['transcriptionAvailableMethod'] = this.transcriptionAvailableMethod
        }

        if (this.silenceTimeout !== undefined) {
            attributes['silenceTimeout'] = `${this.silenceTimeout}`
        }

        if (this.recordCompleteFallbackUrl !== undefined) {
            attributes['recordCompleteFallbackUrl'] = this.recordCompleteFallbackUrl
        }

        if (this.recordCompleteFallbackMethod !== undefined) {
            attributes['recordCompleteFallbackMethod'] = this.recordCompleteFallbackMethod
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword
        }

        xml.ele('Record', attributes)
    }
}
