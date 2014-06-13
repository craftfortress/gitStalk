var http = require('http'),
	fs = require('fs'),
    express = require('express') ;
	 
var port = Number(process.env.PORT || 1337);
var app = express();
var server = app.listen(1337);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public')); 

 app.use(express.static("#{process.cwd()}/resource"));
 app.get('/', function (req, res) {
     res.writeHead(200);
  res.send("");
        }  ); 
 http.createServer(app).listen();

io.sockets.on('connection', function (socket,namo) {
io.sockets.emit("message_to_client", { message: 




  "<span class='label label-info'>Enter a Github username</span>"});

	 
     socket.on('message_to_server', function(data) { 
        var input = data["message"];
 
 

        if (input.length > 20)
            input = input.substring(0, 20);

 
        function check(string){
            if (escaped_message.indexOf(string) > -1) {
                return true;
            } else {
                return false;
            }
        }
 
	    name = "<span class='label label-default'>"+ input +  "</span>";





    var Client = require("./index");

    var github = new Client({
    debug: true,
    version: "3.0.0"
    });

    github.authenticate({
    type: "basic",
    username: "craftfortress",
    password: "secret"
    });

   
	 



	 github.repos.getFromUser({ user: input }, function(err, res) {
	

    console.log("GOT ERR?", err);
    console.log("GOT RES?", res);
	
		io.sockets.emit("githubresponse_to_client",{ message: JSON.stringify(res) }); 
    });

	 
	});
});



/*

*/
