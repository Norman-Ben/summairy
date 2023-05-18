import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <main>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
