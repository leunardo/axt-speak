angular.module('app').config(function ($routeProvider){
    
    $routeProvider.when('/xisquedele', {
        templateUrl: './axt-speak/app/xisquedele/index.html',
        controller: 'xisquedeleController'
    })

    $routeProvider.otherwise('/xisquedele')
})