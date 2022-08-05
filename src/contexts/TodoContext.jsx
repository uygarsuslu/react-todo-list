import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;

    setTodos(cloned_todos);
  };

  const deleteTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);

    cloned_todos.splice(itemIndex, 1);

    setTodos(cloned_todos);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }

  return context;
};
