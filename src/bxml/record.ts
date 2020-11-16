import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Record implements Verb {
    recordCompleteUrl: string | undefined

    recordCompleteMethod: string | undefined

    recordingAvailableUrl: string | undefined

    recordingAvailableMethod: string | undefined

    username: string | undefined

    password: string | undefined

    tag: string | undefined

    terminatingDigits: string | undefined

    maxDuration: number | undefined

    fileFormat: string | undefined

    transcribe: boolean | undefined

    transcriptionAvailableUrl: string | undefined

    transcriptionAvailableMethod: string | undefined

    silenceTimeout: number | undefined

    recordCompleteFallbackUrl: string | undefined

    recordCompleteFallbackMethod: string | undefined

    fallbackUsername: string | undefined

    fallbackPassword: string | undefined

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