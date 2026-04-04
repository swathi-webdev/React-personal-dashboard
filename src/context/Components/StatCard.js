import React from 'react';

function StatCard({ title, value, icon: Icon, variant, delay }) {
  return (
    <div
      className={`stat-card ${variant} animate-fade-in-up`}
      style={{ animationDelay: `${delay || 0}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="small fw-medium" style={{ opacity: 0.8 }}>{title}</span>
        <Icon size={18} style={{ opacity: 0.6 }} />
      </div>
      <p className="fs-3 fw-bold mb-0">{value}</p>
    </div>
  );
}

export default StatCard;

