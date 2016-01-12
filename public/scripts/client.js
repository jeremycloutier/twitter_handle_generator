/**
 * Created by jeremycloutier on 1/11/16.
 */
var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http){
    $scope.retrieve = function(){           // ng-click='retrieve'
        $http.get('/getAdjectives').then(function(response){
            console.log(response.data.adjectives);
            console.log("Adjectives work!");
        });

        $http.get('/getNouns').then(function(response){
            console.log(response.data.nouns);
            console.log("Nouns work!");
        })
    };

    $scope.generate = function(){           // ng-click='generate'

    };
});