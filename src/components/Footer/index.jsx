import React from "react";
import { useTodo } from "../../contexts/TodoContext";

function Footer() {
  const { filter, setFilter, setTodos } = useTodo();

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <a href="#/" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </a>
    </footer>
  );
}

export default Footer;
