var express = require('express');
var https = require('https');

var app = express();
var port = process.env.PORT || 8080;
const request = require('request');
const cheerio = require('cheerio');


app.engine('html', require('ejs').renderFile)



var server = app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


app.use(express.static(__dirname + '/public'));


app.get('/', function (req, resOrigin) {
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

            resOrigin.render('index.ejs', {
            	data: obj.snapshot
            })
        });
	});



  
})
/*
app.get('/item', function (req, resOrigin) {
	const itemID = req.query.itemID;
	var output = "";
	var options = {
	  host: 'hackgt-api.ncrcloud.com',
	  port: 443,
	  path: '/catalog/item-prices/snapshot',
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
            var snapshot = obj.snapshot;
            for (var i = 0; i < snapshot.length; i++){
            	console.log(snapshot[i].priceId.itemCode)
            	if(snapshot[i].priceId.itemCode == itemID){
            		resOrigin.send(JSON.stringify({ price :snapshot[i].price }));
            	}
            }
            resOrigin.send(JSON.stringify({ price :"NA" }));

            
        });
	});


});
*/
app.get('/url', function (req, resOrigin) {
	const url = req.query.url;
	console.log(url);
	request(url, function (error, response, html) {
		
	  if (!error && response.statusCode == 200) {

	    
	      
	  	var data;
		if(url.includes("familycircle") ){
			data = getFamilyCircle(html);
		}
		resOrigin.send(JSON.stringify(data));
	  }
	});



	})
app.disable('view cache');


function getFamilyCircle(html){
	var $ = cheerio.load(html);
	var ret = [];
	var ingredients = $(".ingredients");
	var items = ingredients.find(".ingredient");

	items.each(function(){
		var amount = $(this).find(".amount");
		var quantity = $($(amount[0]).find("span")[0]).html();
		var unit = $($(amount[0]).find("span")[1]).html();
		var name = $($(this).find(".name")).html();

		quantity = quantity.replace("<br>", "").trim();
		unit = unit.replace("<br>", "").trim();
		name = name.replace("<br>", "").trim();
		//console.log(quantity + " " + unit + " " + name);
		ret.push({quantity:quantity, unit:unit, name:name});

	})
	return ret
}


