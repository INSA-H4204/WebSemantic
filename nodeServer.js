var express = require('express'),
 bodyParser = require('body-parser'),
    app = express();
var http = require('http');
var request = require('request');
var superagent = require('superagent');


app.use(express.static(__dirname + '/public'));
// parse application/json
app.use(bodyParser.json({limit: '20mb'}));
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

	superagent
	      .get("http://spotlight.dbpedia.org/rest/annotate")
	      .query({ text: document.text })
	      .set('Accept', 'application/json')
	      .end(function(result) {
	        if(result.ok && result.body.Resources) {
	        	document.Resources = result.body.Resources;
	        	res.send(document);	
	        }
	        else ( res.send(null));
	    })
});

