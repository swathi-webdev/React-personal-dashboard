import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider}  from './context/TaskContext';
import Index from './pages/Index';
import TasksPage from './pages/TasksPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AssistantPage from './pages/AssistantPage';
import NotFound from './pages/NotFound';
import DashboardLayout from './Components/DashboardLayout';
import sidebar from './Components/Sidebar';
import Stat from './Components/StatCard';
import WelcomeModal from './Components/WelcomeModal';
// import { TaskProvider } from './context/TaskContext';
import Analytics from './pages/Analytics';
import Assistant from './pages/Assistant';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboardLayout" element={<DashboardLayout />} />
          <Route path="/sidebar"element={<sidebar/>}/>
          <Route path="/stat" element={<Stat />} />
          <Route path="/welcomeModal" element={<WelcomeModal />} />
          {/* <Route path="/taskContext" element={<TaskContext />} /> */}
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Assistant" element={<Assistant />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          {/* <Route path="assistantpage" element={<AssistantPage />} /> */}



        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
