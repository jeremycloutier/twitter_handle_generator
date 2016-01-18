var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$http', function($scope, $http){
    $scope.adjectives = [];
    $scope.nouns= [];

    $scope.retrieve = function(){           // ng-click='retrieve'
        $http.get('/getAdjectives').then(function(response){
            $scope.adjectives = response.data.adjectives;
            console.log(response.data.adjectives);
        });

        $http.get('/getNouns').then(function(response){
            $scope.nouns = response.data.nouns;
            console.log(response.data.nouns);
        })
    };

    $scope.generate = function(){           // ng-click='generate'
        $scope.handleArray = generateHandleArray($scope.adjectives, $scope.nouns); // This may need to be in generateHandleArray
    };

    function generateHandleArray(adjectives, nouns){
        var handleArray = [];
        var adjectiveArray = randomizeArray(adjectives);
        var nounArray = randomizeArray(nouns);

        for (var i=0; i< adjectiveArray.length; i++){
            handleArray.push(adjectiveArray[i] + nounArray[i]);
        }
        return handleArray;
    }

    function randomizeArray(array) {
        var newArray = [];
        var element = 0;
        var length = array.length;

        for (var i = 0; i < length; i++){
            element = randomNumber(0, array.length -1);
            newArray.push(array[element]);
            array.splice(element, 1);
        }
        return newArray;
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
}]);
