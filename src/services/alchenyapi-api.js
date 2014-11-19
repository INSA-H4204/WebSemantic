myApp.service('AlchemyApi',['$http','$q', function ($http,$q) {

      //Static variable
      const apiKey = "42b36dce9f8950c35e05ca66e4ea5113c0b81b3e";

     buildAlchemyUrl = function(url) {
            return "http://access.alchemyapi.com/calls/url/URLGetText?apikey="+apiKey+"&url="+url+"&outputMode=json"; 
      }
    
      return {
          call: function(urls) {
       
            alert("alchemy");

            var urlCalls = [];
            //Handle deffered request
            var deferred = $q.defer();

            angular.forEach(urls,function(url) {
              urlCalls.push($http.get(buildAlchemyUrl(url)))
            });

            $q.all(urlCalls)
                .then(
                  function(res) {

                      deferred.resolve({url : res }) 
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