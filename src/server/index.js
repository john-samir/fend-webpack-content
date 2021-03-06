var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

//old code
/*app.use(express.static('src/client'))*/

//new code
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //old code 
/*res.sendFile('/client/views/index.html', { root: __dirname + '/..' })*/

    //new code 
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
