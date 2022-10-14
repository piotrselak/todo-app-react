import "./task.css";

export default function Task({ text, onClick }) {
  return (
    <div className="task">
      <p>{text}</p>
      <button class="delete-button" onClick={onClick}>
        &#9747;
      </button>
    </div>
  );
}
