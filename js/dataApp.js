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

var dataApp = angular.module('dataApp', []) // sets up the module
	
	
	dataApp.factory('dataFactory', function($http){ // chains the factory to the app
		
		return {
			
			getDataAsync: function(callback){
				$http.get('data.json').success(callback); // provides access to the JSON file 
				
				}
			};
		
	});// end factory
	
	dataApp.controller('dataController' ,function($scope, dataFactory ){ // sets up the controller
	dataFactory.getDataAsync(function(results) {
		
		$scope.data = results.data;// inital todo list is taken from the JSON file and becomes available through the scope
		console.log($scope.data);
		
		}); 
	
	
	$scope.addItem = function(itemText){ // Add to $scope.todo (assuming it's an array of objects)
        
        $scope.todo.push({"title": itemText, "done": false, "priority": $scope.priority, "date" : $scope.enteredDate });
		console.log($scope.todo);
		$scope.newItem = ""; // clears the input box
		$scope.priority = "";
		
		};// end of $scope.clearCompleted function
		
	
	$scope.clearCompleted = function(){// code reuse from https://www.youtube.com/watch?v=FSOiVprDdj0
		
		$scope.todo = $scope.todo.filter(function(item){
			
			return !item.done // returns only the active items to the list
			
			})
			
			}; // end of $scope.addItem function
			
			
			
	$scope.remaining = function() { // Code reused from http://codepen.io/pibby/pen/DLtaK/
			
				var count = 0;
				angular.forEach($scope.todo, function(todo){
					count+= todo.done ? 0 : 1;
				});
				
				return count;
			}; // end of $scope.remaining function
			
	
	$scope.archive = function() { // saves completed item to a todoDone object
		
            var oldTodo = $scope.todo;
            
            angular.forEach(oldTodo, function(todo) {
              if (todo.done) $scope.todoDone.push(todo);
			  
            });
			$scope.clearCompleted(); // call function to clear completed items
			//console.log( $scope.todoDone);
          };			

	$scope.predicate = 'date';	// sets sort by date on load or refresh
	$scope.todoDone = []; // used to archive done items
	$scope.options = ["High","Medium","Low","Someday","None"]; // Priority options from the $scope
	$scope.selectedOption = $scope.options;
	
	
	});
