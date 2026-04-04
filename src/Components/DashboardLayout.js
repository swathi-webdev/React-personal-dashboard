import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Bell } from 'lucide-react';

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(p => !p)} />
      <div className="flex-grow-1 d-flex flex-column" style={{ overflow: 'hidden' }}>
        <header className="top-header d-flex align-items-center justify-content-end px-4">
          <button className="btn btn-sm position-relative" style={{ color: '#7a8a9e' }}>
            <Bell size={20} />
            <span className="position-absolute rounded-circle bg-primary-custom" style={{ width: 10, height: 10, top: 2, right: 2 }} />
          </button>
        </header>
        <main className="flex-grow-1 p-3 p-sm-4" style={{ overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
