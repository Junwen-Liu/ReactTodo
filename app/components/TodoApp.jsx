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
				text: 'IT support'
			},
			{
				id: uuid(),
				text: 'write the code'
			},
			{
				id: uuid(),
				text: 'learn new technique'
			},
			{
				id: uuid(),
				text: 'listen to music'
			}
			],
			showComplete: false,
			searchText: ''

		}
	},
	handleAddTodo: function(text){
		//alert('new todo' + text);
		this.setState({
			todos: [
			...this.state.todos, {
			id: uuid(), 
			text: text
			}
			]	
		});
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