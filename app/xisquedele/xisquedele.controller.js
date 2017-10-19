angular.module('app').controller('xisquedeleController', function ($scope, apiService) {

    
    function traduzir() {
        apiService.traduzir($scope.messege)
        .then(response => console.log(response.data), fail => console.log(fail));
    }
    
    $scope.traduzir = traduzir;
})