angular.module('app').controller('xisquedeleController', function ($scope, apiService) {

    $scope.traduzir = apiService.traduzir($scope.messege).then(response => response.data);
})