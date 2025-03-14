import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: true } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, markTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
