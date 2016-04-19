var React = require('react');
var TodoDeleteButton = require('./todo_delete_button');
var TodoDoneButton = require('./todo_done_button');

var TodoListItem = React.createClass({
  render: function(){

    return (
        <div>
          <div>{this.props.todo.title}</div>
          <div>{this.props.todo.body}</div>
          <TodoDeleteButton todoId={this.props.todo.id} />
          <TodoDoneButton todo={this.props.todo} />
        </div>
    );
  }
});

module.exports = TodoListItem;
