import React from "react";
import "../css/todoList.css";
import Button from "./button";

export default function Task({ text, onClick, buttonType }) {
  return (
    <div className="task">
      {text}
      <Button type={buttonType} onClick={onClick}>
        &#9747;
      </Button>
    </div>
  );
}
