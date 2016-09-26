var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    if (request.host == 'localhost')
        response.redirect('http://localhost:5000/index.html');
    else
        response.redirect('https://fcm-sample.herokuapp.com/index.html');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

