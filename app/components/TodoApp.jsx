var React = require('react');
var TodoList =require('TodoList');

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
			]
		}
	},
	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;