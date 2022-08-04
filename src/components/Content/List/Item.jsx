import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

function Item({ todo }) {
  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <AiOutlineCheckCircle
          className="icon"
          type="checkbox"
          checked={todo.completed}
        />
        <label>{todo.text}</label>
        <AiOutlineCloseCircle className="destroy" />
      </div>
    </li>
  );
}

export default Item;
