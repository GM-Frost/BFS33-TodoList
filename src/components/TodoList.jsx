import { useState } from "react";

function TodoList({ tasks }) {
  const [todoItems, setTodoItems] = useState(tasks);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    setTodoItems((todoItems) => [...todoItems, { task, isCompleted: false }]);
    setTask("");
  };
  const addNewTask = (e) => {
    setTask(e.target.value);
  };
  const updateList = (index) => {
    let newTodos = todoItems.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoItems(newTodos);
  };
  const deleteTask = (index) => {
    const removeTask = [
      ...todoItems.filter((todo, todoIndex) => todoIndex !== index),
    ];
    setTodoItems(removeTask);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="formTask">
        <input type="text" value={task} onChange={addNewTask} />
        <button>Add Task</button>
      </form>
      <div>
        <ul>
          {todoItems.map((todo, index) => (
            <li className="allTask">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => updateList(index)}
                className="checkBox"
              />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                  color: todo.isCompleted ? "red" : "blue",
                }}
              >
                {todo.task}
              </span>
              <div>
                <span className="deleteItem" onClick={() => deleteTask(index)}>
                  X
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;
