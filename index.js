const server = require('./src/server');

try{
    server.listen(4000);
    console.log('server is running.');
}catch(err){
    console.error('error trying to run server', err);
}