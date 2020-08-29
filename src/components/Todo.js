import React from "react";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  const completeHandler = () => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && "completed"}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
