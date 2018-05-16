const express = require('express');
const path = require('path');
const nodemon = require('nodemon');
const dotenv = require('dotenv').config({
	path: './.env'
});
const exphbs = require('express-handlebars');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key=' + process.env.GOOGLE_API + '&limit=5')
    .then(function(response){
		var videoID =  response.data.items[4].id.videoId;
		var videoIDurl = 'https://www.youtube.com/embed/' + videoID;
		res.render('index', {videoID, videoIDurl, hostname: req.hostname});
    }).catch(function(error){
    	console.log(error.response.data)
    })
});

app.use('/', express.static('public'));

app.listen(PORT, function() {
  console.log(`The server is up and running on port: ${PORT} .`);
});