import React from 'react';
import { useTasks } from '../context/TaskContext';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function Analytics() {
  const { tasks } = useTasks();
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;
  const percentage = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const pieData = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];
  const PIE_COLORS = ['#26c6a5', '#dcb432'];

  const priorityData = [
    { name: 'High', total: tasks.filter(t => t.priority === 'high').length, done: tasks.filter(t => t.priority === 'high' && t.completed).length },
    { name: 'Medium', total: tasks.filter(t => t.priority === 'medium').length, done: tasks.filter(t => t.priority === 'medium' && t.completed).length },
    { name: 'Low', total: tasks.filter(t => t.priority === 'low').length, done: tasks.filter(t => t.priority === 'low' && t.completed).length },
  ];

  const high = tasks.filter(t => t.priority === 'high').length;
  const medium = tasks.filter(t => t.priority === 'medium').length;
  const low = tasks.filter(t => t.priority === 'low').length;

  return (
    <div>
      <div className="mb-4 animate-fade-in">
        <h1 className="fw-bold">Analytics</h1>
        <p className="text-secondary">Insights into your productivity</p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="dash-card p-4 animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0, animationFillMode: 'forwards' }}>
            <h6 className="text-secondary fw-medium mb-3">Completion Rate</h6>
            <div className="d-flex flex-column align-items-center">
              <div className="position-relative" style={{ width: 192, height: 192,color: 'blue' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" strokeWidth={0}>
                      {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <span className="fs-3 fw-bold">{percentage}%</span>
                  <br />
                  <span className="small text-secondary">Done</span>
                </div>
              </div>
              <div className="d-flex gap-4 mt-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle d-inline-block" style={{ width: 12, height: 12, background: '#26c6a5' }} />
                  <span className="small text-secondary">Completed: {completed}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle d-inline-block" style={{ width: 12, height: 12, background: '#dcb432' }} />
                  <span className="small text-secondary">Pending: {pending}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="dash-card p-4 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}>
            <h6 className="text-secondary fw-medium mb-3">Tasks by Priority</h6>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={priorityData}>
                <XAxis dataKey="name" tick={{ fill: '#7a8a9e', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#7a8a9e', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2d3d', border: '1px solid #253040', borderRadius: 8, color: '#d4dce8' }} />
                <Bar dataKey="total" fill="#dcb432" radius={[4, 4, 0, 0]} name="Total" />
                <Bar dataKey="done" fill="#26c6a5" radius={[4, 4, 0, 0]} name="Done" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="dash-card p-4 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}>
        <h6 className="text-secondary fw-medium mb-3">Priority Breakdown</h6>
        <div className="row g-3">
          {[
            { label: 'High', count: high, cls: 'high' },
            { label: 'Medium', count: medium, cls: 'medium' },
            { label: 'Low', count: low, cls: 'low' },
          ].map((item, i) => (
            <div key={item.label} className="col-12 col-sm-4">
              <div className={`priority-card ${item.cls} animate-bounce-in`} style={{ animationDelay: `${400 + i * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <p className="fs-3 fw-bold mb-0">{item.count}</p>
                <p className="small mb-0" style={{ opacity: 0.8 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;

