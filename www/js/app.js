// App name: english
// template: Ionic Starter App
var app = angular.module('funnyEnglish', ['ionic','draw.controllers','draw.services','ngSanitize','ksSwiper']);

// 02- Config and Route
app.config(function($stateProvider ,$urlRouterProvider){
  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: "templates/main.html",
    controller: "MainCtrl"
  })

  .state('detail', {
    url: "/detail/",
    templateUrl: "templates/detail.html",
    controller: "DetailCtrl"
  })

  .state('about', {
    url: "/about",
    templateUrl: "templates/about.html"
  });

  $urlRouterProvider.otherwise('/main');
});




// 09 - end
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
