import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  deleteTodo(id) {
    // console.log(id, this.props.deleteTodo(id));
    this.props.deleteTodo(id);
  }

  render() {
    return (
      <li>
        {this.state.id} {this.state.todo}{" "}
        <button onClick={() => this.deleteTodo(this.state.id)}>削除</button>
      </li>
    );
  }
}

export default Todo;
