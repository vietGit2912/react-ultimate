import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleItemBtnClick }) {
  return (
    <>
      {todos.map((todo) => (
          <TodoItem key={todo.title} title={todo.title} status={todo.status} handleItemBtnClick={handleItemBtnClick} />
      ))}
    </>
  );
}

export default TodoList;
