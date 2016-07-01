var app = angular.module('draw.services',[]);

// 01.2 - factory - filmService
app.factory('DrawService',function($http){
  var drawings = [];
    return {
      getDraw: function(){
        return $http.get('js/data/drawing.json').then(function(response){
          drawings = response.data.results;
          return response.data.results;
        });
      }
    }
});

// 01.3 - factory - Images API
app.factory('ImageService',function($http){
  var drawings = [];
    return {
      getImages: function(){
        return $http.get('http://www.splashbase.co/api/v1/images/latest').then(function(response){
          drawings = response.data.images;
          return response.data.images;
        });
      }
    }
});

// 01.3 - factory - Pixabay API
app.factory('PixaService',function($http){
  var imgPixa = [];
  return {
    getImages: function(){
      return $http.get('https://pixabay.com/api/?key=2836380-d430da30418ba5eb211556429&q=flower&image_type=photo&pretty=true').then(function(response){
        imgPixa = response.data.hits;
        return response.data.hits;
      });
    }
  }
});
