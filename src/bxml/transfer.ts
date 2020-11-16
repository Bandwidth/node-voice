import { XMLElement } from 'xmlbuilder'
import { Verb } from './interfaces'

export class Transfer implements Verb {
    transferCallerId: string | undefined

    callTimeout: number | undefined

    tag: string | undefined

    transferCompleteUrl: string | undefined

    transferCompleteMethod: string | undefined

    username: string | undefined

    password: string | undefined

    diversionTreatment: string | undefined

    diversionReason: string | undefined

    phoneNumbers: Transfer.PhoneNumber[] = []

    transferCompleteFallbackUrl: string | undefined

    transferCompleteFallbackMethod: string | undefined

    fallbackUsername: string | undefined

    fallbackPassword: string | undefined

    addXml(xml: XMLElement) {
        const attributes: {[key: string]: string} = {}

        if (this.transferCallerId !== undefined) {
            attributes['transferCallerId'] = this.transferCallerId;
        }

        if (this.callTimeout !== undefined) {
            attributes['callTimeout'] = `${this.callTimeout}`;
        }

        if (this.tag !== undefined) {
            attributes['tag'] = this.tag;
        }

        if (this.transferCompleteUrl !== undefined) {
            attributes['transferCompleteUrl'] = this.transferCompleteUrl;
        }

        if (this.transferCompleteMethod !== undefined) {
            attributes['transferCompleteMethod'] = this.transferCompleteMethod;
        }

        if (this.username !== undefined) {
            attributes['username'] = this.username;
        }

        if (this.password !== undefined) {
            attributes['password'] = this.password;
        }

        if (this.diversionTreatment !== undefined) {
            attributes['diversionTreatment'] = this.diversionTreatment;
        }

        if (this.diversionReason !== undefined) {
            attributes['diversionReason'] = this.diversionReason;
        }

        if (this.transferCompleteFallbackUrl !== undefined) {
            attributes['transferCompleteFallbackUrl'] = this.transferCompleteFallbackUrl;
        }

        if (this.transferCompleteFallbackMethod !== undefined) {
            attributes['transferCompleteFallbackMethod'] = this.transferCompleteFallbackMethod;
        }

        if (this.fallbackUsername !== undefined) {
            attributes['fallbackUsername'] = this.fallbackUsername;
        }

        if (this.fallbackPassword !== undefined) {
            attributes['fallbackPassword'] = this.fallbackPassword;
        }

        //Generating the element allows the PhoneNumber tags
        //to be added easily
        var ele = xml.ele('Transfer', attributes);

        for (var i = 0; i < this.phoneNumbers.length; i++) {
            this.phoneNumbers[i].addXml(ele);
        }
    }

    
}

export module Transfer {

    export class PhoneNumber implements Verb  {

        number: string | undefined

        transferAnswerUrl: string | undefined

        transferAnswerMethod: string | undefined

        username: string | undefined

        password: string | undefined

        tag: string | undefined

        transferDisconnectUrl: string | undefined

        transferDisconnectMethod: string | undefined

        transferAnswerFallbackUrl: string | undefined

        transferAnswerFallbackMethod: string | undefined

        fallbackUsername: string | undefined

        fallbackPassword: string | undefined


        addXml(xml: XMLElement) {
            const attributes: {[key: string]: string} = {}


            if (this.transferAnswerUrl !== undefined) {
                attributes['transferAnswerUrl'] = this.transferAnswerUrl;
            }

            if (this.transferAnswerMethod !== undefined) {
                attributes['transferAnswerMethod'] = this.transferAnswerMethod;
            }

            if (this.transferDisconnectUrl !== undefined) {
                attributes['transferDisconnectUrl'] = this.transferDisconnectUrl;
            }

            if (this.transferDisconnectMethod !== undefined) {
                attributes['transferDisconnectMethod'] = this.transferDisconnectMethod;
            }

            if (this.username !== undefined) {
                attributes['username'] = this.username;
            }

            if (this.password !== undefined) {
                attributes['password'] = this.password;
            }

            if (this.tag !== undefined) {
                attributes['tag'] = this.tag;
            }

            if (this.transferAnswerFallbackUrl !== undefined) {
                attributes['transferAnswerFallbackUrl'] = this.transferAnswerFallbackUrl;
            }

            if (this.transferAnswerFallbackMethod !== undefined) {
                attributes['transferAnswerFallbackMethod'] = this.transferAnswerFallbackMethod;
            }

            if (this.fallbackUsername !== undefined) {
                attributes['fallbackUsername'] = this.fallbackUsername;
            }

            if (this.fallbackPassword !== undefined) {
                attributes['fallbackPassword'] = this.fallbackPassword;
            }

            xml.ele('PhoneNumber', attributes, this.number);
        }
    }

}