const express = require('express')
const app = express()
const server = require('http').Server(app)
const path = require('path');
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.listen(4000, function() {
  console.log('listening on 4000')
})