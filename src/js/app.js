// (function(){
//   var app = angular.module('pointsource', []);
//   app.controller('UserProfile', ['$http', function($http){
//     var profile = this;
//
//     profile.bio = [ ];
//
//     $http.get('http://applicant.pointsource.us/api/testUser/57869704f62a2d8f3c05da99').success(function(data){
//       profile.bio = data;
//     });
//   }]);
// })();
(function() {
  var app = angular.module('pointsource', []);
  app.controller('UserProfile', ['$http', function($http) {
    var profile = this;

    profile.bio = [];

    $http.get('http://applicant.pointsource.us/api/testUser/57869704f62a2d8f3c05da99')
      .success(function(data) {
        profile.bio = data;
      })
      .error(function(data, status) {
        console.error('Repos error', status, data);
      });
  }]);
})();
