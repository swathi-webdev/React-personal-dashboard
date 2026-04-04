import DashboardLayout from '../Components/DashboardLayout';
import WelcomeModal from '../Components/WelcomeModal';
import Dashboard from '../Components/Dashboard';

function Index() {
  return (

    <>
      <WelcomeModal />
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
}

export default Index;