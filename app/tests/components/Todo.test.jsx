var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', ()=>{
	it('should exist', ()=>{
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id', ()=>{
		var tododata={
			id:10,
			text: 'dothing',
			completed: false
		}

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...tododata} onToggle={spy}/>);

		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(10);
	});
});

