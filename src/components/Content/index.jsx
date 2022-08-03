import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

function Content() {
  return (
    <section className="main">
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <AiOutlineCheckCircle
              className="icon"
              type="checkbox"
              style={{ color: `${"rgb(53, 224, 96)"}` }}
            />
            <label>Learn JavaScript</label>
            <AiOutlineCloseCircle className="destroy" />
          </div>
        </li>
        <li>
          <div className="view">
            <AiOutlineMinusCircle
              className="icon"
              type="checkbox"
              style={{ color: `${"rgb(223, 51, 51)"}` }}
            />
            <label>Learn React</label>
            <AiOutlineCloseCircle className="destroy" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Content;
