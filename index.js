const express = require('express');
const server = express();

try{
    server.listen(4000);
    console.log('server is running');
}catch(err){
    console.error('error starting server...', err);
}

server.use('/api', (req, res) => {
    res.send('Hello');
})
