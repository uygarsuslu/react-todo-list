import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <a href="#/" className="clear-completed">
        Clear completed
      </a>
    </footer>
  );
}

export default Footer;
