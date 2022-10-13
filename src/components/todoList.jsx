import React from "react";
import { useState } from "react";

import Task from "./task";
import Button from "./button";

import "../css/todoList.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currInput, setCurrInput] = useState("");

  function handleAddClick() {
    setTasks([...tasks, currInput]);
    setCurrInput("");
  }

  function handleDeleteClick(ind) {
    setTasks((prevTasks) => prevTasks.filter((value, index) => index !== ind));
  }

  function handleInput(event) {
    setCurrInput(event.target.value);
  }

  return (
    <div className="container">
      <div className="task-list">
        <ul>
          {tasks.map((task, ind) => (
            <li key={ind}>
              <Task
                text={task}
                buttonType="button"
                onClick={() => handleDeleteClick(ind)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="interaction">
        <input type="text" value={currInput} onChange={handleInput}></input>
        <Button className="submit" buttonType="button" onClick={handleAddClick}>
          Add new task
        </Button>
      </div>
    </div>
  );
}
