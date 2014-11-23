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
					console.log(listRessource);
					listRessource = filtreUnique(listRessource);
					 console.log(listRessource);
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
		function filtreUnique(monTab) {
			var an = [];
			var a = [];
			var b = [];
			angular.forEach(monTab,function(resour,key3){
				if (a.indexOf(resour["@URI"]) === -1)
					a.push(resour["@URI"]);
			});
			angular.forEach(monTab,function(resour,key2){
				if ((a.indexOf(resour["@URI"]) === -1)===false){
					b.push(resour);
					a.splice((a.indexOf(resour["@URI"])),1);
				}
			});
			return b;
		}; 
		function EnrichissementSparql() {
//			if(entity["@types"] === "film") {
		        var deffered = $q.defer();
		        var query="select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}";
		        var dbPediaApiUrl ="http://dbpedia.org/sparql?query="+query+"&format=json&timeout=30000";
		        //Call to Google DBPEDIA API

              	console.log("youhou");
		        $http.get(dbPediaApiUrl).
		              then(function(response) {
		                deffered.resolve(response);
		              })
  		        return deffered.promise;
		}
		
		/* function sparqlQuery() {
			request
				.get("http://dbpedia.org/sparql")
				.query({
				"default-graph-uri": "http://dbpedia.org",
				query: "select * where {<http://fr.dbpedia.org/resource/Paris> ?r ?p}",
				format: "json",
				timeout: 30000
				})
				.end(function(res) {
				if(res.ok && res.text) {
				cb(JSON.parse(res.text));
				}
				else {
				console.error("Error on request !");
				}
				});
				} */
		
	return{
      call: function(request) {
		
        //This function is the relaxation main function
        //It can call other function from this service
		/* angular.forEach(res,function(value,key){
					angular.forEach(value.Resources,function(value1,key1){
						if((value1["@types"]= "actor"){
							var temp = (value1["@types"]).substring((value1["@types"]).lastIndexOf(":")+1);
							
							temp = temp.substring(temp.lastIndexOf("/")+1).toLowerCase();
							if(temp === "actor") {
								value1["@types"]= "actor";
								listRessource[i]=value1;
								i=i+1;				
							}  */
		

		//Filtre des entités pour retenir uniquement les entités du domaine du cinéma
		var documents = filtrerParType(request);
        var deffered = $q.defer();
		
		// angular.forEach(documents,function(document,documentKey){
		// 	angular.forEach(document.Resources,function(resource,resourceKey){
		// 		// EnrichissementSparql(resource)
		// 		// 	.then(function(response) {
		// 	 //            console.log(response);
		// 	 //            document.rdf.push(response);
		// 	 //            console.log(document);
		//   //               deffered.resolve(document);
		// 		// 	});
					
				
		// 	});
		// });
		//
		deffered.resolve(EnrichissementSparql());
        return deffered.promise;
      }

	};

}]);