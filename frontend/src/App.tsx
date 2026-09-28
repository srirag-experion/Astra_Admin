import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AddProduct from './components/add_product/add_product';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout title="Overview">
              <div style={{ color: 'var(--text-muted)' }}>
                <p>Welcome to Astra Admin Base Architecture.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Structure is ready for your page definitions!</p>
              </div>
            </MainLayout>
          } 
        />
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
