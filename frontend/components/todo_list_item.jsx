var React = require('react');

var TodoListItem = React.createClass({

render: function(){

  return (
      <div>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
      </div>
  );

}

});


module.exports = TodoListItem;
