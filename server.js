const express = require('express');

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
    accessToken: '27d44a2eb1cb48959dd414df57fdcd31',
    captureUncaught: true,
    captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello Dave!')

app.use(express.static(`${__dirname}/public`));

app.listen(4000, () => console.log('server running on port 4000'));