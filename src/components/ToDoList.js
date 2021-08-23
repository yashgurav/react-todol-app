import { useToDoContextProvider } from "../context/todo-context";
import ToDo from "./ToDo";

const ToDoList = () => {
  const { filteredList } = useToDoContextProvider();

  if (filteredList.length >= 1) {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredList.map((item) => {
            return <ToDo key={item.id} {...item} />;
          })}
        </ul>
      </div>
    );
  } else {
    return <div className="todo-container">Empty List....</div>;
  }
};

export default ToDoList;
