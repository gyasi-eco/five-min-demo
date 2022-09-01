const http = require('http')
const express = require('express');



const VoiceResponse = require('twilio').twiml.VoiceResponse;
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'hello!');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  twiml.message('Ahoy my friend!');

  res.writeHead(200, {'Content-type': 'text/xml'})
  res.end(twiml.toString())
})

// Create an HTTP server and listen for requests on port 3000
app.listen(3000, () => {
  console.log(
    'Now listening on port 3000. ' +
    'Be sure to restart when you make code changes!'
  );
});