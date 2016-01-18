var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.get('/getAdjectives', function(request, response){
    response.sendFile(path.join(__dirname, '../adjectives.json'));
});

app.get('/getNouns', function(request, response){
    response.sendFile(path.join(__dirname, '../nouns.json'));
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});

module.exports = app;