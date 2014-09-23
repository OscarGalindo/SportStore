angular.module("sportsStore")
.constant("dataUrl", "https://kaseangularjs.firebaseio.com/products.json")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
  $scope.data = {};

  $http.get(dataUrl)
  .success(function (data) {
    console.log(data);
    $scope.data.products = data;
  })
  .error(function (error) {
    $scope.data.error = error;
  });
});