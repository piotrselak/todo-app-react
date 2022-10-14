import { useState } from "react";

import Task from "../task/task";

import "./todoList.css";

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
      <ul className="task-list">
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
      <div className="interaction">
        <input type="text" value={currInput} onChange={handleInput}></input>
        <button className="submit" onClick={handleAddClick}>
          &#10004;
        </button>
      </div>
    </div>
  );
}
