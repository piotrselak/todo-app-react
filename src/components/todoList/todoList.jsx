import { useState } from "react";

import TaskList from "../taskList/taskList";

import "./todoList.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currInput, setCurrInput] = useState("");

  function handleAddClick() {
    setTasks([...tasks, { text: currInput }]);
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
      <TaskList tasks={tasks} deleteClick={handleDeleteClick} />
      <div className="interaction">
        <input type="text" value={currInput} onChange={handleInput}></input>
        <button className="submit" onClick={handleAddClick}>
          &#10004;
        </button>
      </div>
    </div>
  );
}
