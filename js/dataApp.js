/*
Author: Thomas Delaney
Workshop: WI20 MDV 2 Assignment
Student ID: D14126353
Date:2015/04/29
Ref:

The sort code and ng-class adapts the sample given in the AnjularJS documation
page https://docs.angularjs.org/api/ng/filter/orderBy
https://docs.angularjs.org/api/ng/directive/ngClass

The following ToDo app toutorial by Joe Maddalone was used as a guide in this assignment
https://www.youtube.com/watch?v=FSOiVprDdj0

Code was reused from the MDW labs. Factories and http for access to JSON files on the server.

*/

var dataApp = angular.module('dataApp', ['ngRoute']) // sets up the module
	
	
	dataApp.factory('dataFactory', function($http){ // chains the factory to the app
		
		return {
			
			getDataAsync: function(callback){
				$http.get('data.json').success(callback); // provides access to the JSON file 
				console.log($scope.data);
				}
			};
		
	});// end factory
	
	dataApp.controller('dataController' ,function($scope, dataFactory ){ // sets up the controller
	dataFactory.getDataAsync(function(results) {
		
		$scope.data = results.data;// inital todo list is taken from the JSON file and becomes available through the scope
		console.log($scope.data);
		
		}); 
	
	
	
	
	
	});
