import React from "react";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          todo: "プログラミングを学習する"
        },
        {
          id: 2,
          todo: "英語を勉強する"
        },
        {
          id: 3,
          todo: "運動する"
        }
      ],
      nextId: 4
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.state.todos.push({
      todo: this.refs.newTodo.value,
      id: this.state.nextId
    });

    this.setState({
      todo: this.state.todos,
      nextId: this.state.nextId + 1
    });

    this.refs.newTodo.value = "";
  }

  deleteTodo(id) {
    const target_index = this.state.todos.reduce((target, todo, index) => {
      if (todo.id === id) {
        target = index;
      }
      return target;
    }, null);

    console.log(target_index);

    this.state.todos.splice(target_index, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo key={todo.id} deleteTodo={id => this.deleteTodo(id)} {...todo} />
      );
    });

    return (
      <div>
        <h1>TODOリスト</h1>
        <ul>{todos}</ul>
        <input type="text" className="input" ref="newTodo" />
        <button className="btn-default" onClick={this.addTodo}>
          追加
        </button>
      </div>
    );
  }
}

export default App;
