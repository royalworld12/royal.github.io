var ArtistControllers = angular.module('ArtistControllers', []);

ArtistControllers.controller('ListController', ['$scope','$http',function($scope,$http) {
 $http.get('js/data.json').success(function(data){
   $scope.artists = data;
   $scope.Artistorder='name';
 });
 }]);

 ArtistControllers.controller('DetailController', ['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
 $http.get('js/data.json').success(function(data){
   $scope.artists = data;
   $scope.WhichItem=$routeParams.itemId;
 });
}]);

