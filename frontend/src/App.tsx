import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SystemSettingsPage from './pages/SystemSettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SystemSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
