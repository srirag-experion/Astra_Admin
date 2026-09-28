import axiosClient from './axiosClient';
import { ApiResponse } from '../types';

export const fetchHealthStatus = (): Promise<ApiResponse> => {
  return axiosClient.get('/health');
};

export const fetchDashboardStats = (): Promise<ApiResponse> => {
  return axiosClient.get('/dashboard/stats');
};

export const fetchUsersList = (): Promise<ApiResponse> => {
  return axiosClient.get('/users');
};
