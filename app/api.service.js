angular.module('app').factory('apiService', function ($http) {
    
    function traduzir(texto) {  
        return $http({
            method: 'POST',
            url: 'http://www.axt-speak.herokuapp.com/translate',
            data: { message: texto }
        });
    }

    return {
       traduzir: traduzir
    };
})