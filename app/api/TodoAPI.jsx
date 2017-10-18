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

	}
};