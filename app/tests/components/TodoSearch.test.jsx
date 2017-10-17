var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect =require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('Todo Search', ()=>{
	it('should exist', ()=>{
		expect(TodoSearch).toExist();
	});

	it('should call onsearch with valid input data', ()=>{
		var searchText = 'Doing busy';
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todosearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todosearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, searchText);

	});

	it('should call onsearch with proper checked value', ()=>{
		var checkedstatus = true;
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todosearch.refs.showComplete.checked = checkedstatus;
		TestUtils.Simulate.change(todosearch.refs.showComplete);

		expect(spy).toHaveBeenCalledWith(checkedstatus, '');

	});
})