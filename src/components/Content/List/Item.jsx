import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useTodo } from "../../../contexts/TodoContext";

function Item({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();

  const onClick = (id) => toggleTodo(id);

  const Icon = todo.completed ? AiOutlineCheckCircle : AiOutlineMinusCircle;

  const onDelete = (id) => deleteTodo(id);

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <Icon
          className="icon"
          type="checkbox"
          checked={todo.completed}
          onClick={() => onClick(todo.id)}
          style={{
            color: `${
              todo.completed ? "rgb(53, 224, 96)" : "rgb(223, 51, 51)"
            }`,
          }}
        />
        <label>{todo.text}</label>
        <AiOutlineCloseCircle
          className="delete"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </li>
  );
}

export default Item;
