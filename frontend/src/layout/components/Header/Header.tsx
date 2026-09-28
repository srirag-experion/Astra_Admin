import React from 'react';
import { Bell, User } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="top-header">
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600 }}>{title}</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span>API Connected</span>
        </div>

        <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
          <Bell size={19} />
        </button>

        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gradient-button)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
          <User size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
