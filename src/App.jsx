import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const allTask = [
    {
      task: "Buy Cookies",
      isCompleted: false,
    },
    {
      task: "Gather Honey",
      isCompleted: false,
    },
    {
      task: "Go Hunting",
      isCompleted: false,
    },
    {
      task: "Feed Lions",
      isCompleted: false,
    },
  ];

  return (
    <>
      <TodoList tasks={allTask} />
    </>
  );
}

export default App;
