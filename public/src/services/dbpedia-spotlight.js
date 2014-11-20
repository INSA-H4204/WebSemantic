/*
myApp.service('DBPediaSpotlightApi',['$http','$q', function ($http,$q) {
  
    buildDBPediaUrl = function(text) {
            return "http://spotlight.dbpedia.org/rest/annotate?text="+text+"&confidence=0.2&support=20"; 
      }     
        return {
    call: function(documents) {
          angular.forEach(documents,function(document,key) {
              $http.get(buildDBPediaUrl(document.text))
          });

            var temp = [];
            //Handle deffered request
            var deferred = $q.defer();

            angular.forEach(documents,function(document,key) {
              
              //textCalls.push($http.get(buildDBPediaUrl(document.text)))
              $http.post(buildDBPediaUrl(document.text)).then(function(response){
                console.log(response);
                document.Resources = response.Resources;
                temp[key] = document;
              });
            }).then(deferred.resolve(temp));

            // $q.all(textCalls)
            //     .then(
            //       function(res) {
            //         console.log(res);
            //         //TODO Find a way to make correspond url with Resources array
            //           deferred.resolve(res)
            //     },
            //     function(errors) {
            //       deferred.reject(errors);
            //     },
            //     function(updates) {
            //       deferred.update(updates);
            //     });
            return deferred.promise;          
         }
   };
}]);
*/

myApp.service('DBPediaSpotlightApi',['$http','$q', function ($http,$q) {
    
        return {
          
         call: function(documents) {

            var ajaxCalls = [];
            //Handle deffered request
            var deferred = $q.defer();





            angular.forEach(documents,function(document) {
              ajaxCalls.push($http({
                    method: "POST",
                    url: "/ConnectToDBPediaApi",
                    data: document
                  }))
              });

            $q.all(ajaxCalls)
                .then(
                  function(res) {
                      documents = []
                      angular.forEach(res,function(value,key){
                        console.log(value);
                        documents[key] = value.data
                      })
                      deferred.resolve(documents) 
                },
                function(errors) {
                  deferred.reject(errors);
                },
                function(updates) {
                  deferred.update(updates);
                });
            return deferred.promise;          
         }
           
   };
}]);

