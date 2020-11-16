import { Gather, SpeakSentence, Response } from '../../src'

const gather = new Gather()
gather.audioProducers.push(new SpeakSentence())

const resp = new Response()
console.log(resp.toBxml())