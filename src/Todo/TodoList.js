import "./TodoList.css";

function TodoList({ todo, deleteTodo, todoCompletion, editTodo, updateStatus }) {
  return (
    <ul className="todo-list">
      {todo.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        todo.map((item) => (
          <li key={item.id} className="todo-item">
            <span onClick={() => todoCompletion(item.id)}>
              <strong>Name:</strong> {item.task}
            </span>
            <div>
              <strong>Description:</strong> {item.description}
            </div>
            <label htmlFor={`status-${item.id}`}>Status:</label>
            <select
              name="status"
              id={`status`}
              value={item.completed ? "completed" : "notCompleted"}
              onChange={(e) => updateStatus(item.id, e.target.value)}
            >
              <option value="completed">Completed</option>
              <option value="notCompleted">Not Completed</option>
            </select>
            <div className="buttons">
              <button onClick={() => editTodo(item.id)}>Edit</button>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;



