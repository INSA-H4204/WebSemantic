myApp.service('AlchemyApi',['$http','$q', function ($http,$q) {

 
      return {
          call: function(documents) {


            var urlCalls = [];
            //Handle deffered request
            var deferred = $q.defer();
            angular.forEach(documents,function(document) {
              urlCalls.push($http({
                    method: "POST",
                    url: "/ConnectToAlchemyApi",
                    data: document
                  }))
              });

            $q.all(urlCalls)
                .then(
                  function(res) {
                    documents = []
                    angular.forEach(res,function(value,key){
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

      
    }

}]);