const http = require('http');
var redis = require('redis')
var ping = require('ping');

const server = http.createServer(function (request, response) {
  if (request.method == 'POST') {
    
    var body = '';
    request.on('data', function (data) {
      body += data;     
    })
    request.on('end', function () {      
        var json = JSON.parse(body); //parse to JSON

        // You can generate a Token from the "Tokens Tab" in the UI
        //const token = 'wHa00g6Uxjs0LxfS-R7L023gElrBqdxgAfLWDMtPFdTaE6pGgNsLJ7oCSZl7KEi5x-z04Tl4S-jOX9ppucmhpg=='
        
        //convert json to string for redis
        var strfy = JSON.stringify(json);
                  
        var clientRedis = redis.createClient({
          host: '127.0.0.1',
          port: 6379
        }); //using default 127.0.0.1:6379

    
        clientRedis.on('connect', function() {
          console.log('connected');
        });
        
        clientRedis.rpush(['datatest', strfy], function (err, reply) {
            //console.log("Queue Length", reply);
        });
        
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('post received');
    })
  }
})

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://127.0.0.1:3000`);