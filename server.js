const app = require('./app');  
const port = process.env.PORT || 3000;

app.listen(port, function() {  
    console.log('Express server listening on port ' + port);
});




//var http = require("http");

//Create HTTP server and listen on port 8000 for requests
//http.createServer(function (request, response) {

   // Set the response HTTP header with HTTP status and Content type
   //response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   //response.end('Hello World\n');
//}).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  //var addr = this.address();
  //console.log("Chat server listening at", addr.address + ":" + addr.port);
//});

// Print URL for accessing server
//console.log('Server running at http://127.0.0.1:8000/')
