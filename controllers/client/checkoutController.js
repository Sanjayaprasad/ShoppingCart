app.controller('checkoutController', function($scope, $state, savedService, productService){
  
  $scope.cod = true;
  $scope.shippingDetails = savedService.get();
  $scope.itemDetails = productService.get();

  $scope.submit = function(){
  	$state.go('/shippingConformation')
  }

  $scope.isDisabled = function(){
    return !$scope.itemDetails.item_ItemName;
  }

  $scope.navigateBack = function(){
    $scope.shippingDetails = savedService.get();
  }
  
});