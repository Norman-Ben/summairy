import Hero from './components/Hero';
import Demo from './components/Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

const App = () => {
  return (
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
  );
};

export default App;
