import React, { Children } from "react";

import "../css/todoList.css";

export default function Button({ className, buttonType, onClick, children }) {
  return (
    <button className={className} type={buttonType} onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
}
