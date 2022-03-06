// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('form').submit(function(event) {
    event.preventDefault();
    
    let query = $('input').val();
    
    $.get('/search?' + $.param({query: query}), function(data) {
      $('#results').empty();
      $('input[type="text"]').val('');
      $('input').focus();
      
      // Get the first ID from the JSON object
      let id = data.artists.items[0].id
      $('#results').append($('<p>' + id + '</p>'));
    });
  });

});





// server.js
// where your node app starts

// init project
/*
import express, { static } from 'express';
var app = express();*/

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// init Spotify API wrapper

import SpotifyWebApi from 'spotify-web-api-node';

// Use our app's credentials
var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
});

// Authenticate our app with Spotify
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });


// http://expressjs.com/en/starter/static-files.html
app.use(static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/search", function (request, response) {
  
  let query = request.query.query;
  console.log(request)
  
  // Search for artists using the query parameter on the request
  spotifyApi.searchArtists(query)
  .then(function(data) {
    console.log(data.body);
    
    // Return the JSON object from the API
    response.send(data.body);
  }, function(err) {
    console.log(err)
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
