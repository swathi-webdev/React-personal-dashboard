import React from 'react';
import DashboardLayout from '../Components/DashboardLayout';
import WelcomeModal from '../Components/WelcomeModal';
import Tasks from './Tasks';

function TasksPage() {
  return (
    <>
      <WelcomeModal />
      <DashboardLayout><Tasks /></DashboardLayout>
    </>
  );
}

export default TasksPage;
