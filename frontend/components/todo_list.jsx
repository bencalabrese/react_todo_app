var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoList = React.createClass({

  getInitialState: function(){
    return TodoStore.all();
  },

  render: function(){
    var todoItems = [];
    for (var id in this.state) {
      todoItems.push(this.state[id]);
    }//for in

    todoItems = todoItems.map(function(todo){
      return <li key={todo.id}>{todo.title}</li>;
    });

    return (
      <div>
        <ul>{todoItems}</ul>
      </div>
    );

  }//render

});

module.exports = TodoList;
