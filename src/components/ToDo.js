import { useToDoContextProvider } from "../context/todo-context";

const ToDo = ({ id, item, completed }) => {
  const {
    deleteItemHandler,
    editItemHandler,
    editItemId,
    setItem,
    toggleCompletion,
  } = useToDoContextProvider();

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{item}</li>
      <button
        className={`${completed ? "incomplete-btn" : "complete-btn"}`}
        disabled={editItemId === id}
        onClick={() => toggleCompletion(id)}
      >
        <i className={`fas ${completed ? "fa-times" : "fa-check"}`}></i>
      </button>

      <button
        className="edit-btn"
        onClick={() => {
          editItemHandler(id);
          setItem(item);
        }}
        disabled={editItemId === id || completed}
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        className="trash-btn"
        onClick={() => {
          deleteItemHandler(id);
        }}
        disabled={editItemId === id}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
