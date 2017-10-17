var React = require('react');
var TodoList =require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function(){
		return{
			todos: [
			{
				id:1,
				text: 'IT support'
			},
			{
				id: 2,
				text: 'write the code'
			},
			{
				id: 3,
				text: 'learn new technique'
			},
			{
				id: 4,
				text: 'listen to music'
			}
			],
			showComplete: false,
			searchText: ''

		}
	},
	handleAddTodo: function(text){
		alert('new todo' + text);
		/*var newtodos = this.state.todos.push({id: this.state.todos.length + 1, text: text})
		this.setState({
			todos: newtodos
		});*/
	},
	handleSearch: function(showComplete, searchText){
		this.setState({
			showComplete: showComplete,
			searchText: searchText.toLowerCase()
		})
	},
	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;