// import React, { createContext, useContext, useState, useCallback } from 'react';

// const defaultTasks = [
//   { id: '1', title: 'Prepare weekly report', priority: 'high', completed: false },
//   { id: '2', title: 'Read 30 pages', priority: 'low', completed: false },
//   { id: '3', title: 'Team standup notes', priority: 'medium', completed: false },
//   { id: '4', title: 'Update documentation', priority: 'medium', completed: false },
//   { id: '5', title: 'Morning workout routine', priority: 'low', completed: true },
//   { id: '6', title: 'Review project proposal', priority: 'high', completed: true },
//   { id: '7', title: 'Code review for PR #42', priority: 'medium', completed: true },
//   { id: '8', title: 'Grocery shopping', priority: 'low', completed: true },
// ];

// const TaskContext = createContext(undefined);

//  export function TaskProvider({ children }) {
//   const [tasks, setTasks] = useState(defaultTasks);
//   const [userName, setUserNameState] = useState(() => localStorage.getItem('dashboard_user') || '');

//   const setUserName = useCallback((name) => {
//     setUserNameState(name);
//     localStorage.setItem('dashboard_user', name);
//   }, []);

//   const addTask = useCallback((title, priority) => {
//     setTasks(prev => [...prev, {
//       id: Date.now().toString(),
//       title,
//       priority,
//       completed: false,
//     }]);
//   }, []);

//   const toggleTask = useCallback((id) => {
//     setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
//   }, []);

//   const deleteTask = useCallback((id) => {
//     setTasks(prev => prev.filter(t => t.id !== id));
//   }, []);

//   return (
//     <TaskContext.Provider value={{ tasks, userName, setUserName, addTask, toggleTask, deleteTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// export function useTasks() {
//   const ctx = useContext(TaskContext);
//   if (!ctx) throw new Error('useTasks must be used within TaskProvider');
//   return ctx;
// }

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const defaultTasks = [
  { id: '1', title: 'Prepare weekly report', priority: 'high', completed: false },
  { id: '2', title: 'Read 30 pages', priority: 'low', completed: false },
  { id: '3', title: 'Team standup notes', priority: 'medium', completed: false },
  { id: '4', title: 'Update documentation', priority: 'medium', completed: false },
  { id: '5', title: 'Morning workout routine', priority: 'low', completed: true },
  { id: '6', title: 'Review project proposal', priority: 'high', completed: true },
  { id: '7', title: 'Code review for PR #42', priority: 'medium', completed: true },
  { id: '8', title: 'Grocery shopping', priority: 'low', completed: true },
];

const TaskContext = createContext();

export function TaskProvider({ children }) {

  // ✅ LOAD from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  const [userName, setUserNameState] = useState(() => {
    return localStorage.getItem('dashboard_user') || '';
  });

  // ✅ SAVE to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const setUserName = useCallback((name) => {
    setUserNameState(name);
    localStorage.setItem('dashboard_user', name);
  }, []);

  const addTask = useCallback((title, priority) => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        priority,
        completed: false,
      }
    ]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, userName, setUserName, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be used within TaskProvider');
  return ctx;
}