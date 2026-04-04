import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, BarChart3, Bot, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/assistant', icon: Bot, label: 'Assistant' },
];

function Sidebar({ open, onToggle }) {
  return (
    <>
      {open && <div className="sidebar-overlay d-lg-none" onClick={onToggle} />}

      <button
        onClick={onToggle}
        className="btn btn-sm d-lg-none position-fixed"
        style={{ top: 12, left: 12, zIndex: 1050, background: '#aff1b2', border: '1px solid #253040', color: '#d4dce8' }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`sidebar d-flex flex-column ${open ? 'open' : ''}`}>
        <div className="p-3 d-flex align-items-center gap-2 border-bottom" style={{ borderColor: '#c0c6cf' }}>
          <div className="bg-primary-custom rounded d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
            <LayoutDashboard size={16} color="#4d70a4" />
          </div>
          <span className="fw-bold">Personal Dashboard</span>
        </div>

        <nav className="flex-grow-1 p-3">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => { if (window.innerWidth < 992) onToggle(); }}
              className={({ isActive }) => `nav-link d-flex align-items-center gap-2 animate-slide-in-left ${isActive ? 'active' : ''}`}
              style={{ animationDelay: `${i * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
