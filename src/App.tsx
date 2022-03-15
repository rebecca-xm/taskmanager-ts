import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Task } from "./model";
import { v4 as uuidv4 } from 'uuid';
import TasksList from "./components/TasksList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: uuidv4(), task: task, isCompleted: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <InputField task={task} setTask={setTask} handleTask={handleTask} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
