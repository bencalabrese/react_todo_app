var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoDoneButton = React.createClass ({
  handleToggle: function(event){
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function() {
    var content = this.props.todo.done ? "Undo" : "Done";

    return (
      <button onClick={this.handleToggle}>{content}</button>
    );
  }
});

module.exports = TodoDoneButton;
