import axiosClient from './axiosClient';
import { ApiResponse } from '../types';
import { LLMConfig } from '../types/config';

export const fetchHealthStatus = (): Promise<ApiResponse> => {
  return axiosClient.get('/health');
};

export const fetchDashboardStats = (): Promise<ApiResponse> => {
  return axiosClient.get('/dashboard/stats');
};

export const fetchUsersList = (): Promise<ApiResponse> => {
  return axiosClient.get('/users');
};

// LLM Configuration API Calls
export const fetchLLMConfig = (): Promise<ApiResponse<LLMConfig>> => {
  return axiosClient.get('/config/llm');
};

export const saveLLMConfig = (config: LLMConfig): Promise<ApiResponse<LLMConfig>> => {
  return axiosClient.post('/config/llm', config);
};

export const testLLMConnection = (config: Partial<LLMConfig>): Promise<ApiResponse<{ latencyMs: number }>> => {
  return axiosClient.post('/config/llm/test', config);
};

