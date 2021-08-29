const express = require('express');
const server = express();

server.get('/api', (req, res) => {
    return res.json({'message': 'Hello'}).status(200);
});

module.exports = server;