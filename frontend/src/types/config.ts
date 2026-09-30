export interface ProjectConfig {
  projectKey: string;
  projectName: string;
  organization: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  provider: string;
  details: string;
  connectedDate: string;
}

export type LLMProviderType = 'OPENAI' | 'ANTHROPIC' | 'OLLAMA' | 'AZURE_OPENAI';

export interface LLMConfig {
  provider: LLMProviderType;
  apiKey?: string;
  model: string;
  temperature: number;
  maxTokens: number;
  baseUrl?: string;
  status?: string;
  updatedAt?: string;
}

