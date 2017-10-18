var React = require('react');
var TodoList =require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
	getInitialState: function(){
		return{
			todos: [
			{
				id:uuid(),
				text: 'IT support',
				completed: true
			},
			{
				id: uuid(),
				text: 'write the code',
				completed: true

			},
			{
				id: uuid(),
				text: 'learn new technique',
				completed: false
			},
			{
				id: uuid(),
				text: 'listen to music',
				completed: false
			}
			],
			showCompleted: false,
			searchText: ''

		}
	},
	handleAddTodo: function(text){
		//alert('new todo' + text);
		this.setState({
			todos: [
			...this.state.todos, {
			id: uuid(), 
			text: text,
			completed: false
			}
			]	
		});
	},
	handleToggle: function(id){
		//alert(id);
		var updateTodo = this.state.todos.map((todo)=>{
			if(todo.id === id){
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updateTodo});
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;