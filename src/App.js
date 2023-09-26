// src/App.js
import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      isDone: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
        className='input-field'
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div  className='container'>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
      <div className='line'></div>
      </div>
    </div>
  );
}

export default App;
