myApp.service('AlchemyApi',['$http','$q', function ($http,$q) {

      //Static variable
      const apiKey = "42b36dce9f8950c35e05ca66e4ea5113c0b81b3e";

     buildUrl = function(url) {
            return "http://access.alchemyapi.com/calls/url/URLGetText?apikey="+apiKey+"&url="+url+"&outputMode=jsonp"; 
      }
    
      return {
          call: function(urls) {
       


            var urlCalls = [];
            //Handle deffered request
            var deferred = $q.defer();

            angular.forEach(urls,function(url) {
              urlCalls.push($http.get(buildUrl(url)))
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