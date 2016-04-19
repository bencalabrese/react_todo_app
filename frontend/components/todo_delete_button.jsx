var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoDeleteButton = React.createClass ({

  handleDestroy: function(event){
    TodoStore.destroy(this.props.todoId);
  },

  render: function() {

    return (
      <button onClick={this.handleDestroy}>Delete Item</button>
    );
  }

});


module.exports = TodoDeleteButton;
