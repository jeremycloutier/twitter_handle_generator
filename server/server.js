var express = require('express');
var angular = require('angular');

var adjectives = require('adjectives');
var nouns = require('nouns');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/getAdjectives', function(request, response){
    response.send(adjectives);
});

app.get('/getNouns', function(request, response){
    response.send(nouns);
});

app.listen(3000, function(){
    console.log('Listening on port 3000.');
});