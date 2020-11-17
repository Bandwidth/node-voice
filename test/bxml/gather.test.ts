import { Gather, SpeakSentence, Response } from '../../src'

describe('BXML Test Suite', () => {
    it('SpeakSentence', async () => {

        const ss = new SpeakSentence({
            sentence: 'Hello World'
        })

        const resp = new Response(ss)

        expect(resp.toBxml()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Gather><SpeakSentence/></Gather></Response>')
    })
    it('Gather', async () => {

        const gather = new Gather()
        gather.audioProducers.push(new SpeakSentence({
            sentence: 'Hello'
        }))

        const resp = new Response()
        resp.add(gather)

        expect(resp.toBxml()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Gather><SpeakSentence/></Gather></Response>')
    })
})