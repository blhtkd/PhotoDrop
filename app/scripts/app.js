'use strict';

/**
 * @ngdoc overview
 * @name photoDropApp
 * @description
 * # photoDropApp
 *
 * Main module of the application.
 */
angular
  .module('photoDropApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
	    .state('home', {
	    	url: '/home',
	    	templateUrl: 'views/main.html',
	    })
	    .state('about', {
	    	url: '/about',
	    	templateUrl: 'views/about.html',
	    });
  })
  .run(function($state){
  		$state.go('home');
  });
  	
