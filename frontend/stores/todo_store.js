var _todos = {};
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach(function(callback) {
      callback();
    });
  },

  addChangedHandler: function(callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function(callback) {
    _callbacks.splice(_callbacks.indexOf(callback), 1);
  },

  all: function(){
    return _todos;
  },

  resetTodos: function(todos){
    var newTodos = {};

    todos.forEach(function(todo){
      newTodos[todo.id] = todo;
    });

    _todos = newTodos;
  },

  addTodo: function(savedTodo) {
    _todos[savedTodo.id] = savedTodo;
  },

  removeTodo: function(id) {
    delete _todos[id];
  },

  toggleStoreDone: function(todo){
    _todos[todo.id].done = todo.done;
  },

  fetch: function() {
    var self = this;

    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function(todos) {
        self.resetTodos(todos);
        self.changed();
      }
    });
  },

  create: function(newTodo){
    var self = this;

    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: {todo: newTodo},
      success: function(savedTodo) {
        self.addTodo(savedTodo);
        self.changed();
      }
    });
  },

  destroy: function(id) {
    var self = this;

    if (_todos[id]) {
      $.ajax({
        url: "/api/todos/" + id,
        method: "DELETE",
        success: function(todo) {
          self.removeTodo(todo.id);
          self.changed();
        }
      });
    }
  },

  toggleDone: function(id) {
    var self = this;
    var todoDoneState = _todos[id].done;
    var newState = todoDoneState ? false : true;

    if (_todos[id]) {
      $.ajax({
        url: "/api/todos/" + id,
        method: "PATCH",
        data: {todo: {done: newState}},
        success: function(todo) {
          self.toggleStoreDone(todo);
          self.changed();
        }
      });
    }
  }
};

module.exports = TodoStore;
