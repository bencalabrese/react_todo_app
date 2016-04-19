var React = require('react');
var TodoDeleteButton = require('./todo_delete_button');

var TodoListItem = React.createClass({

render: function(){

  return (
      <div>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
        <TodoDeleteButton todoId={this.props.todo.id} />
      </div>
  );

}

});


module.exports = TodoListItem;
