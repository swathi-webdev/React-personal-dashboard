import React from 'react';
import { useTasks } from '../context/TaskContext';
import StatCard from '../Components/StatCard';
import { ListTodo, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

const priorityBadge = {
  high: 'badge-high',
  medium: 'badge-medium',
  low: 'badge-low',
};

function Dashboard() {
  const { tasks, userName } = useTasks();
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;
  const productivity = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div>
      <div className="mb-4 animate-fade-in">
        <h1 className="fw-bold">
          {greeting}, <span className="text-primary-custom">{userName || 'Friend'}</span> 👋
        </h1>
        <p className="text-secondary">Great progress! Stay focused! 💪</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <StatCard title="Total Tasks" value={tasks.length} icon={ListTodo} variant="teal" delay={0} />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Completed" value={completed} icon={CheckCircle2} variant="green" delay={100} />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Pending" value={pending} icon={Clock} variant="yellow" delay={200} />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Productivity" value={`${productivity}%`} icon={TrendingUp} variant="accent" delay={300} />
        </div>
      </div>

      <div className="dash-card p-4 animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0, animationFillMode: 'forwards' }}>
        <h5 className="fw-semibold mb-3">Recent Tasks</h5>
        {tasks.slice(0, 5).map((task, i) => (
          <div
            key={task.id}
            className="task-item d-flex align-items-center justify-content-between mb-2 animate-fade-in-up"
            style={{ animationDelay: `${500 + i * 80}ms`, opacity: 0, animationFillMode: 'forwards' }}
          >
            <div className="d-flex align-items-center gap-2">
              <span className="rounded-circle d-inline-block" style={{ width: 10, height: 10, background: task.completed ? '#26c6a5' : '#7a8a9e40' }} />
              <span className={`small ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`}>
                {task.title}
              </span>
            </div>
            <span className={`badge rounded-pill ${priorityBadge[task.priority]}`} style={{ fontSize: 11 }}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
