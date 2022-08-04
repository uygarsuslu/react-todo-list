import React, { createContext, useState, useContext } from "react";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
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

  const values = {
    todos,
    setTodos,
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
