import React from 'react';
import DashboardLayout from '../Components/DashboardLayout';
import WelcomeModal from '../Components/WelcomeModal';
import Analytics from '../pages/Analytics';

function AnalyticsPage() {
  return (
    <>
      <WelcomeModal />
      <DashboardLayout><Analytics /></DashboardLayout>
    </>
  );
}

export default AnalyticsPage;
