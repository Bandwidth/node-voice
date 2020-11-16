import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class StartRecording implements Verb {
    recordingAvailableUrl: string | undefined

    recordingAvailableMethod: string | undefined

    username: string | undefined

    password: string | undefined

    tag: string | undefined

    fileFormat: string | undefined

    multiChannel: string | undefined

    transcribe: string | undefined

    transcriptionAvailableUrl: string | undefined

    transcriptionAvailableMethod: string | undefined

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
            attributes['multiChannel'] = this.multiChannel
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