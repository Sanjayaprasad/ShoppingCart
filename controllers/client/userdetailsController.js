//Submit controller for userDetails
// app.controller('submitForml',function($scope,$http,$location, savedService, myService){
// 	//$scope.onlyNumbers = /^\d+$/;
// 	// $scope.form = { };
// 	$scope.back = function(){
//     	$location.path('/home');
//     }

//   $scope.save = function(){
//     console.log($scope.form); 
// 	myService.setData($scope.form);
// 	if($scope.userForm.$valid)
// 	    $http.post('/userdetails', $scope.form).then(function(res){
// 	      console.log(res);
// 	      savedService.set(res.data);
// 	      $location.path('/checkout');
// 	    });
// 	};

// });

app.controller('submitForml',function($scope,$http,$location, savedService, myService){
 //$scope.onlyNumbers = /^\d+$/;
 // $scope.form = { };

    $scope.back = function(){
      $location.path('/home');
    }

  $scope.form = myService.getData();
  
  $scope.save = function(){
    console.log($scope.form); 
        myService.setData($scope.form);
 if($scope.userForm.$valid)
     $http.post('/userdetails', $scope.form).then(function(res){
       console.log(res);
       savedService.set(res.data);
       $location.path('/checkout');
     });
 };

});