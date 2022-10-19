require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken)

const number = '+16467831646'

client.messages.list({to: number}).then(messages=> {
  messages.forEach(message => {
    client.calls.create({
      to: message.from,
      from: number,
      url: 'https://8dda-98-109-29-32.ngrok.io/voice.xml'
    })
  })
})