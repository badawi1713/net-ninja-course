import React from "react";
import Todos from "./Views/Components/Todos/Todos";
import AddTodo from "./Views/Components/AddTodos/AddTodos";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Playing Pokemon" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
