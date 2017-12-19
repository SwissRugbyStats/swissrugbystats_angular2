/**
 * Created by chregiglatthard on 10.12.17.
 *
 * This thing is starting an Express Server for prod.
 */


const express = require('express');
const app = express();
const path = require('path');

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port

console.log('Starting express server on port', process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);
