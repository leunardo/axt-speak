angular.module('app').factory('apiService', function ($http) {
    
    function traduzir(texto) {  
        return $http({
            method: 'POST',
            url: 'http://www.axt-speak.herokuapp.com/translate',
            data: { message: texto },
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    return {
       traduzir: traduzir
    };
})