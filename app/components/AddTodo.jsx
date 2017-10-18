var React = require('react');

var AddTodo = React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		var todotext = this.refs.todoText.value;

		if (todotext.length > 0){
			this.refs.todoText.value='';
			this.props.onAddTodo(todotext);
		}else{	
			this.refs.todoText.focus();
		}
	},
	render: function (){
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder ="enter todo item here"/>
					<button className="button expanded">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;