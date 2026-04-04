import React from 'react';
import DashboardLayout from '../Components/DashboardLayout';
import WelcomeModal from '../Components/WelcomeModal';
import Assistant from './Assistant';

function AssistantPage() {
  return (
    <>
      <WelcomeModal />
      <DashboardLayout><Assistant /></DashboardLayout>
    </>
  );
}

export default AssistantPage;
