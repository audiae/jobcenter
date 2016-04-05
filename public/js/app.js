var app = angular.module('test', []);

app.controller('attributeController', [
  '$scope',
  function($scope){
    $scope.ages = [
      '17', '20', '25', '30', '45'
    ];
    $scope.religions = [
      "Islam", "Kristen", "Budha", "Hindu"
    ];

  }
]);
