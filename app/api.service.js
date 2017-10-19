angular.module('app').factory('apiService', function ($http) {
    
    function traduzir(texto) {  
        $http.post('https://www.axt-speak.herokuapp.com/translate', JSON.stringify(texto)).then(response => response.data);
    }

    return {
       traduzir: traduzir
    };
})