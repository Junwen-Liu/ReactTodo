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
})