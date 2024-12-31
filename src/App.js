import { useState } from "react";
import "./App.css";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [status, setStatus] = useState("all");

  const addTodo = ({ task, description }) => {
    if (task === "") return;
    if (description === "") return;
    const newTodo = { id: Date.now(), task, description, completed: false };
    setTodo([...todo, newTodo]);
  };

  const editTodo = (id) => {
    const todoToEdit = todo.find((todo) => todo.id === id);
    setEditing(id);
    setEditTask(todoToEdit.task);
    setEditDescription(todoToEdit.description);
  };

  const saveEditedTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id
          ? { ...todo, task: editTask, description: editDescription }
          : todo
      )
    );
    setEditing(null);
    setEditTask("");
    setEditDescription("");
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };


  const todoCompletion = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateStatus = (id, status) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: status === "completed" } : todo
      )
    );
  };

  const filteredTodos = todo.filter((item) => {
    if (status === "completed") return item.completed;
    if (status === "NotCompleted") return !item.completed;
    return true; 
  });

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />
      <div className="status">
        <label htmlFor="filter">Status Filter:</label>
        <select
          id="filter"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="NotCompleted">NotCompleted</option>
        </select>
      </div>

      {editing !== null ? (
        <div>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button onClick={() => saveEditedTodo(editing)}>Save</button>
        </div>
      ) : null}

      <TodoList
        todo={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        todoCompletion={todoCompletion}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default App;
