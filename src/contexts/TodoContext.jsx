import React, { createContext, useContext } from "react";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
  return <ToDoContext.Provider>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }

  return context;
};
