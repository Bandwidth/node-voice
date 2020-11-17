const bxml = require('./dist')

const response = new bxml.Response()
const speakSentence = new bxml.SpeakSentence()
speakSentence.sentence = "hello"
const speakSentence2 = new bxml.SpeakSentence()
speakSentence2.sentence = "hello2222222222"

const gather = new bxml.Gather()
gather.repeatCount = 5
gather.audioProducers.push(speakSentence)
gather.audioProducers.push(speakSentence2)

response.add(gather)

console.log(response.toBxml())