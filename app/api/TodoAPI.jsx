var $ = require('jquery');

//JSON.stringigy convert array to string [1,2] => '[1,2]', JSON.parse convert string to array '[1,2]' => [1,2]. JSON.parse can fail if input is empty.
module.exports = {
	setTodos: function (todos){
		if ($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function(){
		var stringTodos = localStorage.getItem('todos');
		var Todos = [];

		try{
			Todos = JSON.parse(stringTodos);
		}catch(e){

		}

		return $.isArray(Todos) ? Todos : [];

	},
	filterTodos: function(todos, showCompleted, searchText){
		var filterTodos = todos;

		//filter by showcompeleted
		filterTodos = filterTodos.filter((todo)=>{
			return !todo.completed || showCompleted
		});


		//filter by seach text
		filterTodos = filterTodos.filter((todo)=>{
			var text = todo.text.toLowerCase();
			return searchText.length == 0 || text.indexOf(searchText) > -1
		});
		
		//sort with non completed first
		filterTodos.sort((a, b)=>{
			if (!a.completed && b.completed){
				return -1;
			}else if(a.completed && !b.completed){
				return 1;
			}else {
				return 0;
			}
		})

		return filterTodos;
	}
};