// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import DashboardLayout from '../src/Components/DashboardLayout';
// import WelcomeModal from '../src/Components/WelcomeModal';
// import Dashboard from '../src/pages/Dashboard';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);




// function Index() {
//   return (
//     <>
//       <WelcomeModal />
//       <DashboardLayout>
//         <Dashboard />
//       </DashboardLayout>
//     </>
//   );
// }

// export default Index;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
