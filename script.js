var app = angular.module("todoModule",[])
				 .controller("todoController",function($scope){
					
					var todoList = [
						{text:"Learn Javascript",done:true},
						{text:"Learn AngularJS",done:false}

					]; 
					$scope.todoList = todoList;
					
					
					$scope.addTodo = function() {
						console.log("addtodo")
						$scope.todoList.push({text:$scope.todoText,done:false});
						$scope.todoText = '';
					}
					
					$scope.remaining = function(){
						
						var count = 0;
						for (var i=0;i<$scope.todoList.length;i++){
							count +=($scope.todoList[i].done) ? 0:1;
						}
						return count;
					}
					
					$scope.archive = function() {
						var oldTodos = $scope.todoList;
						$scope.todoList = [];
						angular.forEach(oldTodos,function(todo){
							
							if(!todo.done) {
								$scope.todoList.push(todo);
							}
						});
					}
					
				 });