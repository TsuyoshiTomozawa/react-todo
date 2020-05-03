import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";

import App from "./App";

let nextId = 1;
const addTodo = text => ({
  type: "ADD_TODO",
  id: nextId++,
  todo: text
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("test"));
store.dispatch(addTodo("test2"));
store.dispatch(addTodo("test3"));

render(<App />, document.getElementById("root"));
