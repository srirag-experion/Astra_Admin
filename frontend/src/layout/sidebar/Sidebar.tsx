import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusSquare,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white text-slate-700 flex flex-col shrink-0 border-r border-slate-200 select-none min-h-screen shadow-xs">
      {/* Brand Header */}
      <div className="p-4 px-5 border-b border-slate-100 flex items-center space-x-3">
        <div className="h-9 w-9 rounded-lg bg-[#94d320] flex items-center justify-center text-slate-900 font-extrabold text-lg shadow-xs">
          A
        </div>
        <div>
          <div className="font-extrabold text-base tracking-tight text-slate-900 leading-none">
            ASTRA <span className="text-[#84cc16] font-extrabold">ADMIN</span>
          </div>
          <div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
            Config Console
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
              isActive
                ? 'bg-[#edf8c7] text-slate-900 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          <div className="flex items-center space-x-3">
            <LayoutDashboard size={16} className="text-[#84cc16]" />
            <span>Dashboard & System</span>
          </div>
        </NavLink>

        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            `w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
              isActive
                ? 'bg-[#edf8c7] text-slate-900 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          <div className="flex items-center space-x-3">
            <PlusSquare size={16} className="text-[#84cc16]" />
            <span>Add Product</span>
          </div>
        </NavLink>

        <div className="pt-3 mt-3 border-t border-slate-100 space-y-1">
          <button
            type="button"
            className="w-full flex items-center space-x-3 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition"
          >
            <HelpCircle size={15} className="text-slate-400" />
            <span>Help Center & Docs</span>
          </button>
        </div>
      </div>

      {/* Footer Profile Status */}
      <div className="p-3.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center space-x-2.5 truncate">
          <div className="relative shrink-0">
            <div className="h-8 w-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs overflow-hidden">
              <span>AB</span>
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#84cc16] ring-2 ring-white" />
          </div>

          <div className="truncate">
            <div className="text-xs font-bold text-slate-800 truncate">Admin Console</div>
            <div className="text-[10px] text-slate-500 truncate">Node.js Express API</div>
          </div>
        </div>

        <button
          type="button"
          className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition"
          title="Status"
        >
          <ShieldCheck size={14} className="text-[#84cc16]" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
