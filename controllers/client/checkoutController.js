app.controller('checkoutController', function($scope, savedService){
  
  $scope.shippingDetails = savedService.get();

  $scope.alertMe = function(){
          alert("Thanks for placing your order, Your order will be delivered in 3 working days..!");
  };

  // $scope.userdetails = function(data) {
  //   console.log(data);
  //   $scope.form.user_name = data.user_name;
  // };
  
});