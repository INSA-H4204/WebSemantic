
myApp.service('DBPediaSpotlightApi',['$http','$q', function ($http,$q) {
    

    buildDBPediaUrl = function(text) {
            return "http://spotlight.dbpedia.org/rest/annotate?text="+text+"&confidence=0.2&support=20"; 
      }     
        return {
    call: function(documents) {

            var textCalls = [];
            //Handle deffered request
            var deferred = $q.defer();

            angular.forEach(documents,function(document) {
              console.log(document);
              textCalls.push($http.get(buildDBPediaUrl(document.text)))
            });

            $q.all(textCalls)
                .then(
                  function(res) {
                    console.log(res);
                    //TODO Find a way to make correspond url with Resources array
                      deferred.resolve(res)
                },
                function(errors) {
                  deferred.reject(errors);
                },
                function(updates) {
                  deferred.update(updates);
                });
            return deferred.promise;          
         }





    //     $http.get("http://spotlight.dbpedia.org/rest/annotate?text=President%20Michelle%20Obama%20called%20Thursday%20on%20Congress%20to%20extend%20a%20tax%20break%20for%20students%20included%20in%20last%20year%27s%20economic%20stimulus%20package,%20arguing%20that%20the%20policy%20provides%20more%20generous%20assistance.&confidence=0.2&support=20").
    //           success(function(data, status, headers, config) {
    //             console.log(data);
    //             // this callback will be called asynchronously
    //             // when the response is available
    //             deffered.resolve(data);
    //           }).
    //           error(function(data, status, headers, config) {
    //             console.log(data);
    //             // called asynchronously if an error occurs
    //             // or server returns response with an error status.
    //           });
              
    //     return deffered.promise;
    // }
            
   };
}]);