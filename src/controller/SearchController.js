var myApp = angular.module('myApp',[]);

myApp.controller('SearchController', ['$scope','GoogleCustomSearch','AlchenyApi','DBPediaSpotlightApi','Relaxation','Similarity','$http', function($scope,GoogleCustomSearch,AlchenyApi,DBPediaSpotlightApi,Relaxation,Similarity,$http) {
  	
	$scope.callRequest = function() {
		// 1 : Call Google Custom Search Service
		// var urlList = GoogleCustomSearch.call($scope.request);
		//var urlList = GoogleApiService($scope.request); //


		//Prévoir un appel sur callback ?

		// 2 : Call AlchenyAPI service
		AlchenyApi.call(urlList);
		//3 : Call to DBPedia SportLight API
		DBPediaSpotlightApi.call();
		//4 : Service D'enrichissement des graphes
		Relaxation.call();
		//5 : Construction du graphe de similarité
		Similarity.call();
	}	


	//Provisoire : A supprimer dés lors que le service google api remarche avec le renvoi des données grace a deffered.promise.
	GoogleApiService = function(request) {


        //Call Google Custom Seach API
        var cx = "015582470650529878978:r_urnyzvskc";//Google Custom Search key
        var key = "AIzaSyC-Bh81WKg06uvNou1GDqObT-8kzseUauQ";//hexanom4204@gmail.com API KEY
        var googleApiUrl ="https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+request;


		  $http.get(googleApiUrl).
              success(function(data, status, headers, config) {
                var resp = [] ;
                angular.forEach(data.items,function(value,key) {
                  resp[key] = value.link;
                })
               $scope.urlList = resp;
                
                deffered.resolve(resp);
              }).
              error(function(data, status, headers, config) {
                console.log(data);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });

	} 
}]);


//Exemple of what google api service returns : ["http://www.allocine.fr/film/fichefilm_gen_cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547921&cfilm=218759.html","http://www.allocine.fr/video/player_gen_cmedia=19547922&cfilm=218759.html","http://www.allocine.fr/film/fichefilm-218759/casting/","http://www.allocine.fr/film/fichefilm-218759/critiques/spectateurs/","http://www.allocine.fr/film/fichefilm_gen_cfilm=215747.html","http://www.allocine.fr/video/player_gen_cmedia=19541021&cfilm=215747.html","http://www.allocine.fr/film/fichefilm-218759/soundtrack/","http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html","http://www.allocine.fr/video/player_gen_cmedia=19547109&cfilm=125054.html"]