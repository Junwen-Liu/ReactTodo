var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

	beforeEach(()=>{
		localStorage.removeItem('todos');
	});

	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	});

	describe('set todos',()=>{
		it('should set valid todos array', ()=>{
			var todos = [{
				id: 77,
				text: 'test all files',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', ()=>{
			var badTodos = {a: 'n'};

			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('get todos',()=>{
		it('should return empty array for bad localStorage data', ()=>{
			var actualTodos = TodoAPI.getTodos()
			expect(actualTodos).toEqual([]);
		});

		it('should return array for valid array', ()=>{
			var todos = [{
				id: 77,
				text: 'test all files',
				completed: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		})
	});

	describe('filterTodos', ()=>{
		var todos = [

		{
			id: 1,
			text: 'get something',
			completed: true
		},
		{
			id: 2,
			text: 'get fetchi new data',
			completed: true
		},
		{
			id: 3,
			text: 'get input new dialog',
			completed: false
		}
		]

		it('should return all items if showcompleted is true', ()=>{
			var filterTodos = TodoAPI.filterTodos(todos, true, '')
			expect(filterTodos.length).toBe(3);
		})

		it('should return all undone if showcomplete is false', ()=>{
			var filterTodos = TodoAPI.filterTodos(todos, false,'')
			expect(filterTodos.length).toBe(1);

		});

		it('should sort by completed status', ()=>{
			var filterTodos = TodoAPI.filterTodos(todos, true, '')
			expect(filterTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchtext', ()=>{
			var filterTodos = TodoAPI.filterTodos(todos, true, 'new')
			expect(filterTodos.length).toBe(2);
		});
		
		it('should return all if search text if empty', ()=>{
			var filterTodos = TodoAPI.filterTodos(todos, true, '')
			expect(filterTodos.length).toBe(3);
		});
	})
})