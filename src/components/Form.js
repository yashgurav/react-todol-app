import { useToDoContextProvider } from "../context/todo-context";

const Form = () => {
  const { item, setItem, error, addItemHandler, setError, setFilter } =
    useToDoContextProvider();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (item) {
          addItemHandler(item);
          setItem("");
        } else {
          setError();
        }
      }}
    >
      <input
        type="text"
        className="todo-input"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="todo-button" type="submit" disabled={error}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
