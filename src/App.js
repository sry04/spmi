import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Periksa sesi pengguna di sini
    // Contoh sederhana, ganti dengan logika sesi yang sebenarnya
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
