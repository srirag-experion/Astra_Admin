import React, { useState } from 'react';
import { Brain, Database, GitBranch, FlaskConical, Ticket, Bot, MessageSquare, RefreshCw, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import FormField from '../common/FormField/FormField';
import LLMConfigSection from '../LLMConfig/LLMConfigSection';
import './SystemSettings.css';

export const SystemSettings: React.FC = () => {
  const [projectKey, setProjectKey] = useState<string>('ASTRA-CORE');
  const [projectName, setProjectName] = useState<string>('Astra Admin Suite');
  const [organization, setOrganization] = useState<string>('Experion Tenant');
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { id: 1, title: 'LLM Model', icon: Brain },
    { id: 2, title: 'Jira / Tickets', icon: Ticket },
    { id: 3, title: 'Source Control', icon: GitBranch },
    { id: 4, title: 'RAG & Vector DB', icon: Database },
    { id: 5, title: 'Test Runner', icon: FlaskConical },
    { id: 6, title: 'Goose Agent', icon: Bot },
    { id: 7, title: 'Notifications', icon: MessageSquare },
  ];

  const handleReset = () => {
    setProjectKey('ASTRA-CORE');
    setProjectName('Astra Admin Suite');
    setOrganization('Experion Tenant');
    setActiveStep(1);
  };

  return (
    <div className="system-settings-container space-y-6">
      {/* Header */}
      <div className="section-header-row">
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>System Setup Wizard</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Configure your AI pipeline, platform integrations, and developer toolchains step-by-step</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="button" onClick={handleReset} className="btn-reset">
            <RefreshCw size={13} />
            <span>Reset Setup</span>
          </button>
          <button type="button" className="btn-lime">
            <Zap size={13} />
            <span>Runtime JSON</span>
          </button>
        </div>
      </div>

      {/* SonarQube Style Wizard Stepper Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            const isDone = activeStep > step.id;

            return (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#edf8c7] text-[#4d7c0f] border border-[#84cc16]/50 shadow-xs ring-2 ring-[#84cc16]/20'
                      : isDone
                      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      : 'bg-slate-50 text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className={`p-1.5 rounded-md ${
                    isActive ? 'bg-[#84cc16] text-slate-900' : isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {isDone ? <CheckCircle2 size={13} /> : <Icon size={13} />}
                  </div>
                  <span>Step {step.id}: {step.title}</span>
                </button>
                {idx < steps.length - 1 && (
                  <ChevronRight size={14} className="text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Container */}
      {activeStep === 1 && (
        <LLMConfigSection onNextStep={() => setActiveStep(2)} />
      )}

      {activeStep > 1 && (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-4xl">
          <div className="inline-flex p-4 bg-lime-100 text-lime-700 rounded-full mb-3">
            {React.createElement(steps[activeStep - 1].icon, { size: 24 })}
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Step {activeStep}: {steps[activeStep - 1].title} Configuration
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            This module is queued for Step {activeStep}. Complete Step 1 (LLM Foundation) or navigate back using the stepper above.
          </p>
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className="mt-4 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
          >
            ← Back to Step 1 (LLM Provider)
          </button>
        </div>
      )}

      {/* General Information Card */}
      <div className="general-info-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Project Identity Information</h3>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Core identity parameters for this project configuration</p>
          </div>
          <span className="key-badge">{projectKey || 'ASTRA'}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <FormField label="Project Key / Prefix">
            <input
              type="text"
              value={projectKey}
              onChange={(e) => setProjectKey(e.target.value)}
              className="form-input-custom"
            />
          </FormField>

          <FormField label="Project Name">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="form-input-custom"
            />
          </FormField>

          <FormField label="Organization / Tenant">
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="form-input-custom"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;

