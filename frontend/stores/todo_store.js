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
    _todos = todos;
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
      data: {todo: newTodo}
      success: function(todos) {
        self.resetTodos(todos);
        self.changed();
      }
    });
  },


};

module.exports = TodoStore;
