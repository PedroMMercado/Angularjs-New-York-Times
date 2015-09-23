var app = angular.module('times',['ngRoute','ngResource']);


app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/results',{
        templateUrl: 'pages/results.html',
        controller: 'resultController'
    })
});

//Services
app.service('getArticle',function(){
    
});

// Controllers
app.controller('mainController',['$scope','$resource','$http',function($scope,$resource,$http){
    
    // Simple GET request example :
    $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=XXX').then(function(data){
        $scope.data = data;
        console.log(data);
    });
}]);

app.controller('resultController',['$scope',function($scope){
    
}]);
