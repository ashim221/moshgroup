angular.module('app.controllers', [])
  
.controller('personalTrainingEnquiryCtrl', ['$scope', '$stateParams','$http','$cordovaToast', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $cordovaToast) {
$scope.formdata= {};
	$scope.wrong = false;
	$scope.formdata.name="" ;
	$scope.formdata.email="" ;
	$scope.formdata.phone="" ;
	$scope.formdata.goal="" ;
	$scope.wrongMessage="";
$scope.register=function(){
	//alert("awesome");
	$scope.wrong = false;
	$scope.wrongMessage="";
	console.log($scope.formdata);
	if ($scope.formdata.name==="" ||$scope.formdata.name===null)
		{
			$scope.wrong = true;
			console.log('1');
			$scope.wrongMessage="Name is required \n";
		}
	if (($scope.formdata.email==="" ||$scope.formdata.email===null)&&($scope.formdata.phone==="" ||$scope.formdata.phone===null))
		{
			$scope.wrong = true;
			console.log('1');
			$scope.wrongMessage=$scope.wrongMessage + "Email or phone is required \n";
		}
	
	 else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.formdata.email))
  {
    
  }
	else
		{
			$scope.wrong = true;
			console.log('1');
			$scope.wrongMessage=$scope.wrongMessage + "Email address is not valid \n";
		}
	if ($scope.wrong===false)
		{
        
        $http.post("http://moshfitness.london/app/moshapp1.php", {name : $scope.formdata.name, email:$scope.formdata.email, phone:$scope.formdata.phone, goal:$scope.formdata.goal }).success(function (response) {  
            $scope.value = response;  
			console.log(response);
			document.getElementById("contactMe-form1").reset();
			 $cordovaToast.show(response, 'long', 'center').success(function() {
            console.log("The toast was shown");
				 
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
         })  
           .error(function (error) {  
              alert(error);  
           });  
    
		}
	console.log($scope.wrong);
};
	

}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('privacyPolicyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    