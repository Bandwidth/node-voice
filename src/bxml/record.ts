import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Record implements Verb {
    recordCompleteUrl: string | undefined = undefined

    recordCompleteMethod: string | undefined = undefined

    recordingAvailableUrl: string | undefined = undefined

    recordingAvailableMethod: string | undefined = undefined

    username: string | undefined = undefined

    password: string | undefined = undefined

    tag: string | undefined = undefined

    terminatingDigits: string | undefined = undefined

    maxDuration: number | undefined = undefined

    fileFormat: string | undefined = undefined

    transcribe: boolean | undefined = undefined

    transcriptionAvailableUrl: string | undefined = undefined

    transcriptionAvailableMethod: string | undefined = undefined

    silenceTimeout: number | undefined = undefined

    recordCompleteFallbackUrl: string | undefined = undefined

    recordCompleteFallbackMethod: string | undefined = undefined

    fallbackUsername: string | undefined = undefined

    fallbackPassword: string | undefined = undefined

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