import React from 'react';
import { Search, Bell, CheckCircle2, Save, FileCode } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 bg-white text-slate-800 border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40 select-none shadow-xs">
      {/* Left: Global Search */}
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search configuration or modules..."
            className="w-full bg-slate-50 text-xs text-slate-800 placeholder:text-slate-400 rounded-lg pl-9 pr-4 py-2 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-lime-400/50 focus:border-lime-500 transition-all"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full font-medium">
          <CheckCircle2 size={12} className="text-[#84cc16]" />
          <span>Synced</span>
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg transition"
        >
          <FileCode size={13} />
          <span>JSON</span>
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-[#94d320] hover:bg-[#84cc16] text-slate-900 rounded-lg shadow-xs transition active:scale-[0.98]"
        >
          <Save size={13} />
          <span>Save</span>
        </button>

        <div className="h-6 w-px bg-slate-200 mx-1" />
        <button
          type="button"
          className="p-2 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-100 transition relative"
        >
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#84cc16]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
