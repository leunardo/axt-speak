angular.module('app').config(function ($routeProvider){
    
    $routeProvider.when('/xisquedele', {
        templateUrl: './app/xisquedele/index.html',
        controller: 'xisquedeleController'
    })

    $routeProvider.otherwise('/xisquedele')
})