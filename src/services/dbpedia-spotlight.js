
myApp.service('DBPediaSpotlightApi',['$http','$q', function ($http,$q) {
        
        return {
    call: function(request) {

      //Handle deffered request
      var deffered = $q.defer();


        $http.get().
              success(function(data, status, headers, config) {
                console.log(data);
                // this callback will be called asynchronously
                // when the response is available
                deffered.resolve(data);
              }).
              error(function(data, status, headers, config) {
                console.log(data);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
              
        return deffered.promise;
    }
            
   };
}]);