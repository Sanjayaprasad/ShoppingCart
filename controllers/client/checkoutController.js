app.controller('checkoutController', function($scope, $state, savedService, productService){
  
  $scope.shippingDetails = savedService.get();
  $scope.itemDetails = productService.get();

  $scope.submit = function(){
  	$state.go('/shippingConformation')
  }

  $scope.isDisabled = function(){
    return !$scope.itemDetails.item_ItemName;
  }
  
});