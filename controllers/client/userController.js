//User controller for searching the item
app.controller('UserController', function($scope,$filter, $http, productDetailService){

  $scope.IsVisible = false;
  // API - To get all products
  // TODO - Move to Services because values should come form services or model in MVC 
  $http.get("/api/products").then(function(response) {
    console.log(response.data.data);
    $scope.products = response.data.data;
  });
  
  // Get valid Item into $scope
  $scope.calculateTotalPrice = function(){
    if($scope.productData.qty > 0 && $scope.productData.qty <= $scope.item_quantity){
      $scope.totalPrice = $scope.productData.qty * $scope.item_itemprice ;
      console.log($scope.item_itemprice);
      $scope.message = '';
      productDetailService.set({item_ItemName:$scope.item_ItemName, totalPrice:$scope.totalPrice});
      return $scope.totalPrice;
    }else if($scope.productData.qty == 0){
      $scope.message = "Please check the quantity";
      $scope.totalPrice ='';
    }else{
      $scope.message = "sorry! Asked quantity is not available";
      $scope.totalPrice ='';
    }
  };
  
  $scope.validateItem = false;

  // Single Item Price
  $scope.singleItemPrice = function(){
    angular.forEach($scope.products, function(value, key){
      if($filter('lowercase')(value.itemname) == $filter('lowercase')($scope.item_ItemName)){
        $scope.item_itemprice = value.itemprice;
        $scope.item_quantity = value.quantity; 
        $scope.IsVisible = $scope.IsVisible ? false : true;
        return false;
      }
    });
  };
  
  //clear all fields
  $scope.clearValues = function(){
    $scope.productData = {};
    $scope.item_itemprice = '';
    $scope.item_ItemName = '';
    $scope.validateItem = false;
    $scope.totalPrice ='';
    $scope.message = '';
    $scope.IsVisible = '';
  };

  $scope.itemlist = function(rowData) {
    console.log(rowData);
    $scope.item_ItemName = rowData.itemname;
    $scope.item_itemprice = rowData.itemprice;
    $scope.item_quantity = rowData.quantity;
    $scope.IsVisible = $scope.IsVisible ? false : true;
  };

  $scope.buynow = function(){
    $state.go('#/userDetails');
  };
  
});
