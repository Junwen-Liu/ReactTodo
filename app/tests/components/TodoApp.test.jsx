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
		expect(todoapp.state.todos[0].createdAt).toBeA('number');
	}); 

	it('should toggle completed value when handle toggle call', ()=>{
		var tododata={
			id: 11,
			text:'something test',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		}

		var todoapp =TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [tododata]});

		expect(todoapp.state.todos[0].completed).toBe(false);
		todoapp.handleToggle(tododata.id);
		expect(todoapp.state.todos[0].completed).toBe(true);
		expect(todoapp.state.todos[0].completedAt).toBeA('number');

	});

	it('should remove completedAt when toggle back to undone', ()=>{
		var tododata={
			id: 11,
			text:'something test',
			completed: true,
			createdAt: 0,
			completedAt: 1500000000
		}

		var todoapp =TestUtils.renderIntoDocument(<TodoApp/>);
		todoapp.setState({todos: [tododata]});

		expect(todoapp.state.todos[0].completed).toBe(true);
		todoapp.handleToggle(tododata.id);
		expect(todoapp.state.todos[0].completed).toBe(false);
		expect(todoapp.state.todos[0].completedAt).toBe(undefined);

	});
})