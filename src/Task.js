import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const taskClassName = task.isDone ? 'task done' : 'task';

  return (
    <div className={taskClassName}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
