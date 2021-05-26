const http = require('http');
var redis = require('redis');

// create a web server object
const server = http.createServer(function (request, response) {
  if (request.method == 'POST') {   
    var body = '';
    request.on('data', function (data) {
      //getting body data
      body += data;     
    })
    request.on('end', function () {      
        var json = JSON.parse(body); //parse to JSON

        //convert json to string format for redis
        var strfy = JSON.stringify(json);
                  
        var clientRedis = redis.createClient({
          host: '127.0.0.1',
          port: 6379
        }); //using default 127.0.0.1:6379

        //connection check 
        clientRedis.on('connect', function() {
          console.log('connected');
        });
        clientRedis.on("error", function (error) {
          console.error(error);
        });
        
        //push value into Redis List
        clientRedis.rpush(['datatest', strfy], function (err, reply) { 
          console.log(strfy)
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