import React, { useState, useEffect } from 'react';
import { Brain, CheckCircle2, AlertCircle, RefreshCw, Eye, EyeOff, Send, ArrowRight } from 'lucide-react';
import { LLMProviderType } from '../../types/config';
import { saveLLMConfig, testLLMConnection, fetchLLMConfig } from '../../api';

interface LLMConfigSectionProps {
  onNextStep?: () => void;
}

export const LLMConfigSection: React.FC<LLMConfigSectionProps> = ({ onNextStep }) => {
  const [provider, setProvider] = useState<LLMProviderType>('OPENAI');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [model, setModel] = useState<string>('gpt-4o-mini');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [maxTokens, setMaxTokens] = useState<number>(2048);
  const [baseUrl, setBaseUrl] = useState<string>('https://api.openai.com/v1');

  const [loading, setLoading] = useState<boolean>(true);
  const [testing, setTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    fetchLLMConfig()
      .then((res) => {
        if (res.data) {
          setProvider(res.data.provider || 'OPENAI');
          setApiKey(res.data.apiKey || '');
          setModel(res.data.model || 'gpt-4o-mini');
          setTemperature(res.data.temperature ?? 0.7);
          setMaxTokens(res.data.maxTokens ?? 2048);
          setBaseUrl(res.data.baseUrl || 'https://api.openai.com/v1');
        }
      })
      .catch((err) => console.warn('Using default LLM config state:', err))
      .finally(() => setLoading(false));
  }, []);

  const getModelOptions = () => {
    switch (provider) {
      case 'OPENAI':
        return ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'o1-preview'];
      case 'ANTHROPIC':
        return ['claude-3-5-sonnet', 'claude-3-haiku', 'claude-3-opus'];
      case 'OLLAMA':
        return ['llama3:8b', 'mistral:7b', 'codellama:13b', 'deepseek-coder:6.7b'];
      case 'AZURE_OPENAI':
        return ['gpt-4-32k', 'gpt-35-turbo'];
      default:
        return ['gpt-4o-mini'];
    }
  };

  const handleProviderSelect = (newProvider: LLMProviderType) => {
    setProvider(newProvider);
    setTestResult(null);
    if (newProvider === 'OPENAI') {
      setModel('gpt-4o-mini');
      setBaseUrl('https://api.openai.com/v1');
    } else if (newProvider === 'ANTHROPIC') {
      setModel('claude-3-5-sonnet');
      setBaseUrl('https://api.anthropic.com');
    } else if (newProvider === 'OLLAMA') {
      setModel('llama3:8b');
      setBaseUrl('http://localhost:11434');
    } else if (newProvider === 'AZURE_OPENAI') {
      setModel('gpt-4-32k');
      setBaseUrl('https://your-resource.openai.azure.com');
    }
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const response = await testLLMConnection({ provider, apiKey, baseUrl });
      setTestResult({
        success: true,
        message: response.message || `Connection to ${provider} verified successfully!`
      });
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || `Failed to connect to ${provider}. Please check credentials.`
      });
    } finally {
      setTesting(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveLLMConfig({ provider, apiKey, model, temperature, maxTokens, baseUrl });
      setTestResult({
        success: true,
        message: `${provider} configuration saved successfully!`
      });
      if (onNextStep) {
        setTimeout(() => onNextStep(), 800);
      }
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || 'Error saving configuration.'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 bg-white rounded-xl border border-slate-200 flex items-center justify-center gap-3 text-slate-500 text-xs">
        <RefreshCw className="animate-spin text-[#84cc16]" size={16} />
        <span>Loading LLM Configuration...</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs max-w-4xl">
      {/* Title Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Brain className="text-[#84cc16]" size={20} />
            Step 1: Select & Configure LLM Foundation Model
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Choose your primary LLM provider for intelligence, code generation, and analysis.
          </p>
        </div>
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#edf8c7] text-[#65a30d]">
          Step 1 of 7
        </span>
      </div>

      {/* Provider Selector Cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { id: 'OPENAI', name: 'OpenAI', desc: 'GPT-4o & GPT-4o-mini' },
          { id: 'ANTHROPIC', name: 'Anthropic', desc: 'Claude 3.5 Sonnet' },
          { id: 'OLLAMA', name: 'Ollama (Local)', desc: 'On-Prem / Offline' },
          { id: 'AZURE_OPENAI', name: 'Azure OpenAI', desc: 'Enterprise Cloud' }
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleProviderSelect(item.id as LLMProviderType)}
            className={`p-4 rounded-xl border text-left transition-all ${
              provider === item.id
                ? 'border-[#84cc16] bg-[#edf8c7]/40 ring-2 ring-[#84cc16]/20'
                : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
            }`}
          >
            <div className="text-xs font-bold text-slate-900">{item.name}</div>
            <div className="text-[10px] text-slate-500 mt-1">{item.desc}</div>
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* API Key Field (Hidden for local Ollama) */}
        {provider !== 'OLLAMA' && (
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {provider} Secret API Key
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={`Enter your ${provider} API Key (e.g., sk-...)`}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                {showApiKey ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
        )}

        {/* Base URL Endpoint */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            API Base Endpoint URL
          </label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="e.g., https://api.openai.com/v1 or http://localhost:11434"
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
          />
        </div>

        {/* Model & Max Tokens */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Target Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
            >
              {getModelOptions().map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Max Output Tokens</label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
            />
          </div>
        </div>

        {/* Temperature Range Slider */}
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
            <span>Temperature (Creativity): {temperature}</span>
            <span className="text-[10px] text-slate-400 font-normal">0.0 (Strict) - 1.0 (Creative)</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-[#84cc16]"
          />
        </div>
      </div>

      {/* Test Result Feedback */}
      {testResult && (
        <div className={`mt-4 p-3 rounded-lg text-xs flex items-center gap-2 ${
          testResult.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          {testResult.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          <span>{testResult.message}</span>
        </div>
      )}

      {/* Footer Controls */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={handleTestConnection}
          disabled={testing}
          className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-2 transition"
        >
          {testing ? <RefreshCw className="animate-spin text-slate-600" size={14} /> : <Send size={14} />}
          <span>{testing ? 'Testing Endpoint...' : 'Test Connection'}</span>
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 text-xs font-bold text-slate-900 bg-[#94d320] hover:bg-[#84cc16] rounded-lg shadow-xs flex items-center gap-2 transition active:scale-[0.98]"
        >
          <span>{saving ? 'Saving...' : 'Save & Continue'}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default LLMConfigSection;
