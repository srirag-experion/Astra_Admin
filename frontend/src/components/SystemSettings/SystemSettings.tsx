import React, { useState } from 'react';
import { Brain, Database, GitBranch, FlaskConical, Ticket, Bot, MessageSquare, RefreshCw, Zap, ArrowUpRight } from 'lucide-react';
import FormField from '../common/FormField/FormField';
import './SystemSettings.css';

export const SystemSettings: React.FC = () => {
  const [projectKey, setProjectKey] = useState<string>('ASTRA-CORE');
  const [projectName, setProjectName] = useState<string>('Astra Admin Suite');
  const [organization, setOrganization] = useState<string>('Experion Tenant');

  const serviceCards = [
    { id: 'llm', title: 'LLM Model Providers', provider: 'OPENAI', details: 'gpt-4o-mini', icon: Brain, connectedDate: 'Connected: Today' },
    { id: 'rag', title: 'Knowledge Base & Vector Store', provider: 'PINECONE', details: '1024 tokens • OpenAI Embeddings', icon: Database, connectedDate: 'Connected: Active' },
    { id: 'source_control', title: 'Source Code Connections', provider: 'GITHUB', details: 'astra-org/admin-repo', icon: GitBranch, connectedDate: 'Connected: Synced' },
    { id: 'test_runner', title: 'Automated QA & Test Runners', provider: 'PLAYWRIGHT', details: 'Framework: PLAYWRIGHT', icon: FlaskConical, connectedDate: 'Configured' },
    { id: 'ticketing', title: 'Issue & Ticket Workflows', provider: 'JIRA', details: 'Project Key: JIRA-PROD', icon: Ticket, connectedDate: 'Bi-directional' },
    { id: 'goose', title: 'Autonomous Coding Agents', provider: 'AUTONOMOUS', details: 'claude-3-5-sonnet • Docker Sandbox', icon: Bot, connectedDate: 'Ready' },
    { id: 'integrations', title: 'Connected APIs & Slack', provider: 'SLACK ACTIVE', details: '#alerts-production', icon: MessageSquare, connectedDate: 'Webhook Active' },
  ];

  const handleReset = () => {
    setProjectKey('ASTRA-CORE');
    setProjectName('Astra Admin Suite');
    setOrganization('Experion Tenant');
  };

  return (
    <div className="system-settings-container">
      {/* Header */}
      <div className="section-header-row">
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>System Settings</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Setup and edit system settings, AI providers, and project preferences</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="button" onClick={handleReset} className="btn-reset">
            <RefreshCw size={13} />
            <span>Reset</span>
          </button>
          <button type="button" className="btn-lime">
            <Zap size={13} />
            <span>Runtime JSON</span>
          </button>
        </div>
      </div>

      {/* General Information Card */}
      <div className="general-info-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>General Information</h3>
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

      {/* Connected Services Grid */}
      <div>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Connected Services & Modules</h3>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem' }}>Click any card to edit its underlying parameters</p>

        <div className="services-grid">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="service-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '10px', background: '#edf8c7', color: '#65a30d' }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>{card.title}</h4>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{card.connectedDate}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#334155', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                    {card.details}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', fontSize: '0.75rem', fontWeight: 700, color: '#65a30d' }}>
                  <span>Edit Settings</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
