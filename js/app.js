var myApp=angular.module('myApp',['ArtistControllers','ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/list',{
            templateUrl:'partial/list.html',
            controller:'ListController'
        }).
        when('/details/:itemId',{
            templateUrl:'partial/details.html',
            controller:'DetailController'
        }).
        otherwise ({
            redirectTo:'/list'
        });


}]);