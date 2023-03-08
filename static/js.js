var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  }).then(function mySuccess(response) {
      $scope.data = response.data;
      }, function myError(response) {
      $scope.data = response.statusText;
  });
});
