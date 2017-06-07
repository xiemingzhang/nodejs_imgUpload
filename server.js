var http = require('http');
var url = require('url');
var router = require("./router");

function serverStart(route,handle){
        http.createServer(function(req,res){
            res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://192.168.1.106:5462"});
            /*var postData = "";*/
            var pathname = url.parse(req.url).pathname;
            console.log('http request for '+pathname+' recieved');
            
            /*req.setEncoding("utf8");
            
            req.addListener("data",function(postDataChunk){
              postData += postDataChunk;
              console.log('received post data chunk'+postDataChunk+".");
            });*/
            
            /*req.addListener("end",function(postDataChunk){
              route(handle,pathname,res,req);
            }); */    
            route(handle,pathname,res,req);                                 
                   
        }).listen(3000,'127.0.0.1');
        
        console.log('http server start on port 3000');
}

exports.serverStart = serverStart;

