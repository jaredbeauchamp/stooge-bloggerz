'use strict';

/**
 * @ngdoc function
 * @name stoogeBloggerzApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the stoogeBloggerzApp
 */
angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, blog, author) {
    $scope.blogPosts = blog.getPosts();
    $scope.authorList = author.getAuthors();
    $scope.authorFilter = '';
    $scope.changeAuthor = function(name){
      console.log(name);
      $scope.authorFilter = name;
    }
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
 //    $scope.blogPosts = [
 //  { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
 //  { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
 //  { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
 //  { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
	// ];

  //alert(posts.getArtist());

  });
