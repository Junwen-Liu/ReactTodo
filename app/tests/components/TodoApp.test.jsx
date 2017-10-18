var React =require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
	it('should exist', ()=>{
		expect(TodoApp).toExist();
	});

	it('it should add todo to the todos state on handleAddTodo', ()=>{
		var todotext = 'for some testing';
		var todoapp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoapp.setState({todos:[]});
		todoapp.handleAddTodo(todotext);

		expect(todoapp.state.todos[0].text).toBe(todotext);
	}); 

	it('should toggle completed value when handle toggle call', ()=>{
		var tododata={
			id: 11,
			text:'something test',
			completed: false
		}

		var todoapp =TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [tododata]});

		expect(todoapp.state.todos[0].completed).toBe(false);
		todoapp.handleToggle(tododata.id);
		expect(todoapp.state.todos[0].completed).toBe(true);

	});
})