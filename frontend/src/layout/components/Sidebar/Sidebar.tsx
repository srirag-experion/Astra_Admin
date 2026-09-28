import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusSquare, Cpu, ShieldCheck } from 'lucide-react';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <div className="brand-icon">
            <Cpu size={22} />
          </div>
          <span className="brand-title">Astra Admin</span>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <LayoutDashboard size={18} />
              <span>Overview</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-product" className={({ isActive }) => (isActive ? 'active' : '')}>
              <PlusSquare size={18} />
              <span>Add Product</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#9ca3af' }}>
          <ShieldCheck size={16} color="#10b981" />
          <span>Backend Connected</span>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Node.js Express API</p>
      </div>
    </aside>
  );
};

export default Sidebar;
