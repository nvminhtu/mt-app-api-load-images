var app = angular.module('draw.controllers', []);

// 01.1 - App Controller for manage all Controllers
app.controller("AppCtrl",function($scope, $ionicHistory) {

  // declare information for Application
  $scope.appName  = "Cartoon drawing";
  $scope.appHome 	= "Home";
  $scope.catBack  =  "Draw";

  //GoBack Button
  $scope.GoBack = function() {
    $ionicHistory.goBack();
  };
});

// 01.2- Controller for Main View
app.controller("MainCtrl",['$scope','$stateParams','ImageService',function($scope, $stateParams, ImageService){
  var imageArray = [];
  ImageService.getImages().then(function(draw){
    for( var i = 0; i< draw.length; i++){
       imageArray.push(draw[i]);
    }
  });
  $scope.photos = imageArray;

  // 03 - Swiper for photos
  $scope.swiper = {};

  $scope.nextSlide = function(){
  };

  $scope.prevSlide = function(){
    $scope.swiper.slidePrev();
  };

  $scope.onReadySwiper = function (swiper) {
    //swiper on click to go index

  };

}]);

// 01.4- Controller for Detail View
app.controller("DetailCtrl",function($scope,$stateParams, DrawService){
  var index = $stateParams.index;
  var availableDraw = [];

  // 01 - Get photos from Services
  DrawService.getDraw().then(function(drawNew){

    var length = drawNew.length;
	  for( var i = 0; i< length; i++){
    	if( drawNew[i].id == index ){
    		availableDraw.push(drawNew[i]);
    	}
    }
    $scope.draw = availableDraw[0];
    $scope.photos = availableDraw[0].photos;
  });

  // 02 - Check index (if result image)
  $scope.stepIndex = function(index) {
    var str = "";
    if(index === 0) {
      str = availableDraw[0].name;
    } else {
      str = "Step " + index;
    }
    return str;
  }
  // 03 - Swiper for photos
  $scope.swiper = {};

  $scope.nextSlide = function(){
  };

  $scope.prevSlide = function(){
    $scope.swiper.slidePrev();
  };

  $scope.onReadySwiper = function (swiper) {
    //swiper on click to go index

  };

});
