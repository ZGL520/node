var http = require('http');
var fs = require('fs');

http.createServer(function (request,response) {
   response.writeHead(200,{'Content-Type':'text/plain'});

   fs.readFile('./static/input.txt',function (err,data) {
       if (err){
           console.log(err.stack);
           return;
       }
       response.end(data.toString());
   });
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');




// console.log('文本处理完成');