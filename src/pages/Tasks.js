import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Plus, Trash2 } from 'lucide-react';

const priorityBadge = {
  high: 'badge-high',
  medium: 'badge-medium',
  low: 'badge-low',
};

function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [filter, setFilter] = useState('all');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim(), priority);
    setTitle('');
  };

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="mx-auto" style={{ maxWidth: 700 }}>
      <div className="mb-4 animate-fade-in">
        <h1 className="fw-bold">Tasks</h1>
        <p className="text-secondary">Manage your to-dos</p>
      </div>

      <form onSubmit={handleAdd} className="mb-4 animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0, animationFillMode: 'forwards' }}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="form-control form-control-dark mb-2"
        />
        <div className="d-flex gap-2">
          <select value={priority} onChange={e => setPriority(e.target.value)} className="form-select form-control-dark" style={{ width: 'auto' }}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button type="submit" className="btn btn-primary-custom d-flex align-items-center gap-1">
            <Plus size={16} /> Add
          </button>
        </div>
      </form>

      <div className="d-flex gap-2 mb-3 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}>
        {['all', 'active', 'completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`filter-btn text-capitalize ${filter === f ? 'active' : ''}`}>
            {f}
          </button>
        ))}
      </div>

      {filtered.map((task, i) => (
        <div
          key={task.id}
          className="task-item d-flex align-items-center gap-2 mb-2 animate-fade-in-up"
          style={{ animationDelay: `${300 + i * 60}ms`, opacity: 0, animationFillMode: 'forwards' }}
        >
          <button onClick={() => toggleTask(task.id)} className={`check-btn ${task.completed ? 'done' : ''}`}>
            {task.completed && <span style={{ color: '#1a2332', fontSize: 10 }}>✓</span>}
          </button>
          <span className={`flex-grow-1 small ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`}>
            {task.title}
          </span>
          <span className={`badge rounded-pill ${priorityBadge[task.priority]}`} style={{ fontSize: 11 }}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
          <button onClick={() => deleteTask(task.id)} className="btn btn-sm p-0" style={{ color: '#7a8a9e', opacity: 0.5 }}>
            <Trash2 size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

