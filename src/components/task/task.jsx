import "./task.css";

export default function Task({ text, onClick, buttonType }) {
  return (
    <div className="task">
      {text}
      <button type={buttonType} onClick={onClick}>
        &#9747;
      </button>
    </div>
  );
}
