/*
 *  Basic Mocha unit tests to check auth and data gathering from Github
 */

"use strict";

var Assert = require("assert");
var Client = require("./../index");
var Cred = require("./../cred");

var theusername= "craftfortress";
var thepassword = "secretpass";


describe("[client]", function() {
    var client; 

       client = new Client({
	   debug: true,
            version: "3.0.0"
        });

		console.log(Cred.user);

	  
	 describe('Grabbing details from github',function(){
		var authfail;
		
		
		 before(function(done){
		 
		 							client.authenticate({
										type: "basic",
										username: theusername,
										password:thepassword
									}, function(error, response) {
			
									authfail = error;
			
									});
									
									done();
			
			
			});



			 it('Authentiate with Github Fail',function(){
				   Assert.equal(authfail,null  );
				});


			});


	 describe('Grabbing details from github',function(){
	 var err, res;

		 before(function(done){
     
								client.repos.getFromUser({ user: theusername }, function(error, response) {
									err = error; res= response;
								done();        

								
							  }); 
	        

			});

			 it('Username get from Github Fail',function(){
				   Assert.equal(err,null  );
				});


				 it('Repo details fine',function(){
				   Assert.ok(res );
				});

	 });

	  

});
