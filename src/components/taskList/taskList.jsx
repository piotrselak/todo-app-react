import Task from "../task/task";
import "./taskList.css";

export default function TaskList({ ...props }) {
  const mappedTasks = props.tasks.map((task, ind) => (
    <li key={ind}>
      <Task text={task.text} onClick={() => props.deleteClick(ind)} />
    </li>
  ));

  return <ul className="task-list">{mappedTasks}</ul>;
}
