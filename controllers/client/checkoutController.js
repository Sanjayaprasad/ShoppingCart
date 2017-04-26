app.controller('checkoutController', function($scope, $state, savedService, productService){
  
  $scope.shippingDetails = savedService.get();
  $scope.itemDetails = productService.get();

  $scope.alertMe = function(){
  	alert("Thanks for placing your order, Your order will be delivered in 3 working days..!");
  };

  $scope.submit = function(){
  	$state.go('/shippingConformation')
  }

  $scope.submitIsDisabled = function(){
    return !itemDetails.item_ItemName;
  }
  
});