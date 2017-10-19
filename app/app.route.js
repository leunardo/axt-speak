angular.module('app').config(function ($routeProvider){
    $routeProvider.when('/xisquedele', {
        templateUrl: 'xisquedele/index.html',
        controller: 'xisquedeleController'
    })

    $routeProvider.otherwise('/xisequedele')
})