var express = require('express'),
 bodyParser = require('body-parser'),
    app = express();
var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;



app.use(express.static(__dirname + '/public'));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

   //Static variable
   const apiKey = "42b36dce9f8950c35e05ca66e4ea5113c0b81b3e";


app.post('/ConnectToAlchemyApi', function(req, res) {
    var document = req.body;
	request.get(
	    "http://access.alchemyapi.com/calls/url/URLGetText?apikey="+apiKey+"&url="+document.link+"&outputMode=json",
	    { form: { key: 'value' } },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	        	document.text = JSON.parse(body).text;
	        	res.send(document);
	        }
	    }
	);
	
});


app.post('/ConnectToDBPediaApi', function(req, res) {
    var document = req.body;



    var options = {
    host: 'spotlight.dbpedia.org',
    path: "/rest/annotate?text="+document.text+"&confidence=0.2&support=20",
    method: 'GET',
    headers: {
        	'Content-Type': 'application/json',
    	}
	};
	var req=http.get(options, function(res) {
	    console.log(res.statusCode);
	    var body = '';
	    res.on('data', function(data) {
	        body += data;
	    });
	    res.on('end', function() {
	    		console.log(body);
		        document.Resources = JSON.parse(body).Resources;
     	    	res.send(document);
	    });
	    res.on('error', function(error) {
	        console.log(error);
	    });
	});

	// request.get(
	// 	"http://spotlight.dbpedia.org/rest/annotate?text="+document.text+"&confidence=0.2&support=20",
	   
	//     function (error, response, body) {
	//     	console.log(response.statusCode);
	//     	if (!error && response.statusCode == 200) {
	//     		console.log(body);
	//     		parseString(body, function (err, result) {
	// 			    console.dir(result.html.body);
	// 			});

	//         	//document.Resources = JSON.parse(body).Resources;
 //    	    	res.send(document);
	//     	}
	//     }
	// );
	
});