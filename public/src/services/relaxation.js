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
					console.log(montemps);
					listres[p] = (montemps);
					p=p+1;
				}
			});
			
			return listres;
		};
		
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
		monresu = filtrerParType(request);
		
        return monresu;
      }

	};

}]);