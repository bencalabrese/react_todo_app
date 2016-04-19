var React = require('react');
var TodoDetailView = require('./todo_detail_view');
var TodoDoneButton = require('./todo_done_button');

var TodoListItem = React.createClass({
  getInitialState: function() {
    return {showDetail: false};
  },

  handleDetail: function() {
    var newShowDetail = this.state.showDetail ? false : true;
    this.setState({showDetail: newShowDetail});
  },

  render: function(){
    var details = this.state.showDetail ?
      <TodoDetailView todo={this.props.todo}/> :
      "";

    return (
        <div>
          <div onClick={this.handleDetail}>{this.props.todo.title}</div>
          <TodoDoneButton todo={this.props.todo} />
          {details}
        </div>
    );
  }
});

module.exports = TodoListItem;
