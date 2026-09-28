import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './MainLayout.css';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ title = 'Astra Admin', children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Header title={title} />
        <main className="content-body">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
