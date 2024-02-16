import { XMLElement } from 'xmlbuilder'
import { Verb } from './Verb'

export interface TransferOptions  {
    transferCallerId?: string

    transferCallerDisplayName?: string

    callTimeout?: number

    tag?: string

    transferCompleteUrl?: string

    transferCompleteMethod?: string

    username?: string

    password?: string

    diversionTreatment?: string

    diversionReason?: string

    phoneNumbers?: Transfer.PhoneNumber[]

    sipUris?: Transfer.SipUri[]

    transferCompleteFallbackUrl?: string

    transferCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string
}

export class Transfer implements TransferOptions, Verb {
    transferCallerId?: string

    transferCallerDisplayName?: string

    callTimeout?: number

    tag?: string

    transferCompleteUrl?: string

    transferCompleteMethod?: string

    username?: string

    password?: string

    diversionTreatment?: string

    diversionReason?: string

    phoneNumbers?: Transfer.PhoneNumber[]

    sipUris?: Transfer.SipUri[]

    transferCompleteFallbackUrl?: string

    transferCompleteFallbackMethod?: string

    fallbackUsername?: string

    fallbackPassword?: string

    constructor(options: TransferOptions) {
        this.phoneNumbers = options.phoneNumbers
        this.sipUris = options.sipUris

        this.callTimeout = options.callTimeout
        this.diversionReason = options.diversionReason
        this.diversionTreatment = options.diversionTreatment
        this.fallbackPassword = options.fallbackPassword
        this.fallbackUsername = options.fallbackUsername
        this.password = options.password
        this.username = options.username
        this.tag = options.tag
        this.transferCallerId = options.transferCallerId
        this.transferCallerDisplayName = options.transferCallerDisplayName
        this.transferCompleteFallbackMethod = options.transferCompleteFallbackMethod
        this.transferCompleteFallbackUrl = options.transferCompleteFallbackUrl
        this.transferCompleteMethod = options.transferCompleteMethod
        this.transferCompleteUrl = options.transferCompleteUrl
    }

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.transferCallerId !== undefined) {
            attributes['transferCallerId'] = this.transferCallerId
        }

        if (this.transferCallerDisplayName !== undefined) {
            attributes['transferCallerDisplayName'] = this.transferCallerDisplayName
        }

        if (this.callTimeout !== undefined) {
            attributes['callTimeout'] = `${this.callTimeout}`
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag
        }

        if (this.transferCompleteUrl !== undefined) {
            attributes['transferCompleteUrl'] = this.transferCompleteUrl
        }

        if (this.transferCompleteMethod !== undefined) {
            attributes['transferCompleteMethod'] = this.transferCompleteMethod
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password
        }

        if (this.diversionTreatment !== undefined) {
            attributes['diversionTreatment'] = this.diversionTreatment
        }

        if (this.diversionReason !== undefined) {
            attributes['diversionReason'] = this.diversionReason
        }

        if (this.transferCompleteFallbackUrl !== undefined) {
            attributes['transferCompleteFallbackUrl'] = this.transferCompleteFallbackUrl
        }

        if (this.transferCompleteFallbackMethod !== undefined) {
            attributes['transferCompleteFallbackMethod'] = this.transferCompleteFallbackMethod
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword
        }

        //Generating the element allows the PhoneNumber tags
        //to be added easily
        var ele = xml.ele('Transfer', attributes)

        if (this.phoneNumbers && this.phoneNumbers.length > 0) {
            for (const phoneNumber of this.phoneNumbers) {
                phoneNumber.addXml(ele)
            }
        }

        if (this.sipUris && this.sipUris.length > 0) {
            for (const sipUri of this.sipUris) {
                sipUri.addXml(ele)
            }
        }
    }
}

export module Transfer {
    
    export interface SipUriOptions {
        sipUri: string

        uui?: string

        transferAnswerUrl?: string

        transferAnswerMethod?: string

        transferAnswerFallbackUrl?: string

        transferAnswerFallbackMethod?: string

        transferDisconnectUrl?: string

        transferDisconnectMethod?: string

        username?: string

        password?: string

        fallbackUsername?: string

        fallbackPassword?: string

        tag?: string

    }

    export class SipUri implements SipUriOptions, Verb {
        sipUri: string

        uui?: string

        transferAnswerUrl?: string

        transferAnswerMethod?: string

        transferAnswerFallbackUrl?: string

        transferAnswerFallbackMethod?: string

        transferDisconnectUrl?: string

        transferDisconnectMethod?: string

        username?: string

        password?: string

        fallbackUsername?: string

        fallbackPassword?: string

        tag?: string

        constructor(options: SipUriOptions) {
            this.sipUri = options.sipUri
            this.uui = options.uui
            this.transferAnswerUrl = options.transferAnswerUrl
            this.transferAnswerMethod = options.transferAnswerMethod
            this.transferAnswerFallbackUrl = options.transferAnswerFallbackUrl
            this.transferAnswerFallbackMethod = options.transferAnswerFallbackMethod
            this.transferDisconnectUrl = options.transferDisconnectUrl
            this.transferDisconnectMethod = options.transferDisconnectMethod
            this.username = options.username
            this.password = options.password
            this.fallbackUsername = options.fallbackUsername
            this.fallbackPassword = options.fallbackPassword
            this.tag = options.tag
        }

        addXml(xml: XMLElement) {
            const attributes: {[key: string]: string} = {}

            if (this.uui !== undefined) {
                attributes['uui'] = this.uui
            }

            if (this.transferAnswerUrl !== undefined) {
                attributes['transferAnswerUrl'] = this.transferAnswerUrl
            }

            if (this.transferAnswerMethod !== undefined) {
                attributes['transferAnswerMethod'] = this.transferAnswerMethod
            }

            if (this.transferAnswerFallbackUrl !== undefined) {
                attributes['transferAnswerFallbackUrl'] = this.transferAnswerFallbackUrl
            }

            if (this.transferAnswerFallbackMethod !== undefined) {
                attributes['transferAnswerFallbackMethod'] = this.transferAnswerFallbackMethod
            }

            if (this.transferDisconnectUrl !== undefined) {
                attributes['transferDisconnectUrl'] = this.transferDisconnectUrl
            }

            if (this.transferDisconnectMethod !== undefined) {
                attributes['transferDisconnectMethod'] = this.transferDisconnectMethod
            }

            if (this.username !== undefined) {
                attributes['username'] = this.username
            }

            if (this.password !== undefined) {
                attributes['password'] = this.password
            }

            if (this.fallbackUsername !== undefined) {
                attributes['fallbackUsername'] = this.fallbackUsername
            }

            if (this.fallbackPassword !== undefined) {
                attributes['fallbackPassword'] = this.fallbackPassword
            }

            if (this.tag !== undefined) {
                attributes['tag'] = this.tag
            }

            xml.ele('SipUri', attributes, this.sipUri)
            
        }
    }
}

export module Transfer {

    export interface PhoneNumberOptions  {
        number: string

        transferAnswerUrl?: string

        transferAnswerMethod?: string

        username?: string

        password?: string

        tag?: string

        transferDisconnectUrl?: string

        transferDisconnectMethod?: string

        transferAnswerFallbackUrl?: string

        transferAnswerFallbackMethod?: string

        fallbackUsername?: string

        fallbackPassword?: string
    }

    export class PhoneNumber implements PhoneNumberOptions, Verb   {
        number: string 

        transferAnswerUrl?: string

        transferAnswerMethod?: string

        username?: string

        password?: string

        tag?: string

        transferDisconnectUrl?: string

        transferDisconnectMethod?: string

        transferAnswerFallbackUrl?: string

        transferAnswerFallbackMethod?: string

        fallbackUsername?: string

        fallbackPassword?: string

        constructor(options :PhoneNumberOptions) {
            this.number = options.number
            this.fallbackPassword = options.fallbackPassword
            this.fallbackUsername = options.fallbackUsername
            this.password = options.password
            this.username = options.username
            this.tag = options.tag
            this.transferAnswerFallbackMethod = options.transferAnswerFallbackMethod
            this.transferAnswerFallbackUrl = options.transferAnswerFallbackUrl
            this.transferAnswerMethod = options.transferAnswerMethod
            this.transferAnswerUrl = options.transferAnswerUrl
            this.transferDisconnectMethod = options.transferDisconnectMethod
            this.transferDisconnectUrl = options.transferDisconnectUrl
        }


        addXml(xml: XMLElement) {
            const attributes: {[key: string]: string} = {}


            if (this.transferAnswerUrl !== undefined) {
                attributes['transferAnswerUrl'] = this.transferAnswerUrl
            }

            if (this.transferAnswerMethod !== undefined) {
                attributes['transferAnswerMethod'] = this.transferAnswerMethod
            }

            if (this.transferDisconnectUrl !== undefined) {
                attributes['transferDisconnectUrl'] = this.transferDisconnectUrl
            }

            if (this.transferDisconnectMethod !== undefined) {
                attributes['transferDisconnectMethod'] = this.transferDisconnectMethod
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

            if (this.transferAnswerFallbackUrl !== undefined) {
                attributes['transferAnswerFallbackUrl'] = this.transferAnswerFallbackUrl
            }

            if (this.transferAnswerFallbackMethod !== undefined) {
                attributes['transferAnswerFallbackMethod'] = this.transferAnswerFallbackMethod
            }

            if (this.fallbackUsername !== undefined) {
                attributes['fallbackUsername'] = this.fallbackUsername
            }

            if (this.fallbackPassword !== undefined) {
                attributes['fallbackPassword'] = this.fallbackPassword
            }

            xml.ele('PhoneNumber', attributes, this.number)
        }
    }

}

