myApp.service('Relaxation',['$http','$q', function ($http,$q) {

		function filtrerParType(res) {
			var listres = []
			var p=0
			 angular.forEach(res,function(value,key){
				var listRessource = []
				var i=0
				if((value==="")===false) {
					
					angular.forEach(value.Resources,function(value1,key1){
						if((value1["@types"]==="")===false){
							var temp = (value1["@types"]).substring((value1["@types"]).lastIndexOf(":")+1);
							
							temp = temp.substring(temp.lastIndexOf("/")+1).toLowerCase();

							if(temp === "actor") {
								value1["@types"]= "actor";
								listRessource[i]=value1;
								i=i+1;				
							} 
							
							 else if(temp === "producer") {
								value1["@types"] = "producer";
								listRessource[i]=value1;
								i=i+1;
							}
							else if(temp === "director") {
								value1["@types"] = "director";
								listRessource[i]=value1;
								i=i+1;					
							}
							else if(temp === "film"||temp === "movie") {
								value1["@types"]= "film";
								listRessource[i]=value1;
								i=i+1;
							}
						}
					});
					var montemps = new Object();
					montemps.Resources = listRessource;
					montemps.link = value.link;
					montemps.snippet = value.snippet;
					montemps.title = value.title;
					var tabtemps= new Array (listRessource,value.link,value.snippet,value.title)
					listres[p] = (montemps);
					p=p+1;
				}
			});
			
			return listres;
		};


		function EnrichissementDocumentSparql(document){
			var sparqlGet = [];
			angular.forEach(document.Resources,function(resource){
					sparqlGet.push(sparqlQuery(resource));
			});

  		    var deferred = $q.defer();
			$q.all(sparqlGet)
                .then(
                  function(results) {
                  	document.rdf = results;
                    deferred.resolve(document) 
                },
                function(errors) {
                  deferred.reject(errors);
                },
                function(updates) {
                  deferred.update(updates);
                });
            return deferred.promise;          
         }

		function sparqlQuery(resource) {
			if(resource["@types"] === "film") {
		        //var query="select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}";
  		    }
  		    else if(resource["@types"] === "actor"){
		        //var query="select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}";
  		    }
  		    else if(resource["@types"] === "director"){
		        //var query="select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}";
  		    }
  		    else if(resource["@types"] === "resource"){
		        //var query="select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}";
  		    }
  		    var deferred = $q.defer();

			var query="select distinct ?Concept where {[] a ?Concept} LIMIT 100";
        	var url ="http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query="+query+"&format=json&timeout=30000";
			$http.get(url).then(function(response) {
                    deferred.resolve(response.data.results.bindings);
			});
	        return deferred.promise;
  		}


		
		
	return {
      call: function(request) {

		//Filtre des entités pour retenir uniquement les entités du domaine du cinéma
		var documents = filtrerParType(request);
        var defered = $q.defer();
		var response = [];
		angular.forEach(documents,function(document){
			response.push(EnrichissementDocumentSparql(document));
		});
      
  		    var deferred = $q.defer();
			$q.all(response)
                .then(
                  function(result) {
                    deferred.resolve(result) 
                },
                function(errors) {
                  deferred.reject(errors);
                },
                function(updates) {
                  deferred.update(updates);
                });
            return deferred.promise;          
		}
	}
}]);