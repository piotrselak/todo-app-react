import React, { Children } from "react";

import "../css/todoList.css";

export default function Button({ children, ...props }) {
  return (
    <button {...props}>
      {" "}
      {children}{" "}
    </button>
  );
}
