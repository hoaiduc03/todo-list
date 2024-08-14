import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, isCompleted: false }]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="task-input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Thêm việc cần làm"
        />
        <button onClick={handleAddTask}>Thêm</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.isCompleted ? 'Hoan thanh' : ''}>
            <span onClick={() => handleToggleComplete(index)}>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
