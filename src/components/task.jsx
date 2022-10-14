import React from "react";
import "../css/todoList.css";

export default function Task({ text, onClick }) {
  return (
    <div className="task">
      {text}
      <button onClick={onClick}>&#9747;</button>
    </div>
  );
}
