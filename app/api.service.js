angular.module('app').factory('apiService', function ($http) {
    
    function traduzir(texto) {  
        $http.post('http://www.axt-speak.herokuapp.com/translate', { message: texto });
    }

    return {
       traduzir: traduzir
    };
})