import React from "react";
import "./Todos.css";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((item, index) => {
      return (
        <div className="collection-item todolist" key={item.id}>
          <p> {item.content}</p>

          <span
            onClick={(e) => {
              e.preventDefault();
              deleteTodo(item.id);
            }}
          >
            <i title="delete" className="material-icons">
              delete
            </i>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay! </p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
