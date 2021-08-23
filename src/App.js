import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Error from "./components/Error";
import { useToDoContextProvider } from "./context/todo-context";
function App() {
  const { error, editItemId } = useToDoContextProvider();
  return (
    <div className="App">
      <header>
        <h1> Your Todo List</h1>
      </header>
      {editItemId && (
        <div style={{ textAlign: "center" }}> Edit Current Item </div>
      )}
      <Form />
      {error && <Error error={"Please fill contents..."} />}
      <ToDoList />
    </div>
  );
}

export default App;
