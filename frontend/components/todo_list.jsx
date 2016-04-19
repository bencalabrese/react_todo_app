var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('./todo_list_item');
var TodoForm = require('./todo_form');

var TodoList = React.createClass({

  getInitialState: function(){
    return {todoItems: TodoStore.all()};
  },

  todosChanged: function(){
    this.setState({todoItems: TodoStore.all()});
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function(){
    var todoListItems = this.state.todoItems.map(function(todo){
      return <TodoListItem key={todo.id} todo={todo}/>;
    });

    return (
      <div>
        {todoListItems}
        <TodoForm/>
      </div>
    );

  }//render

});

module.exports = TodoList;
