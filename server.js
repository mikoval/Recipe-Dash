var express = require('express');
var https = require('https');
var app = express();
var port = process.env.PORT || 8080;
app.engine('html', require('ejs').renderFile)



var server = app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});




app.get('/', function (req, res) {
	var output = "";
	var options = {
	  host: 'hackgt-api.ncrcloud.com',
	  port: 443,
	  path: '/catalog/items/snapshot',
	  method: 'GET',
	  headers: {
	  	"Authorization" : "Basic L29yZy0xL2FkbWluOkNoYW5nM20zISEtYWRtaW4tb3JnLTE=",
	    "nep-application-key" : "8a82859f5ef21870015ef2fa5e5f0000",
    	"Content-Type": "application/json",
	  }


	};

	var tmp = https.get(options, function(res) {
		res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            console.log(obj.snapshot[0].shortDescription);
        });
	});



  res.render('index.ejs')
})
app.disable('view cache');



