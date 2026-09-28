import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SystemSettingsPage from './pages/SystemSettingsPage';
import AddProduct from './components/add_product/add_product';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SystemSettingsPage />} />
        <Route 
          path="/add-product" 
          element={
            <MainLayout title="Add Product">
              <AddProduct />
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
