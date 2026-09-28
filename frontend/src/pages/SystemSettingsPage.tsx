import React from 'react';
import MainLayout from '../layout/MainLayout/MainLayout';
import SystemSettings from '../components/SystemSettings/SystemSettings';

export const SystemSettingsPage: React.FC = () => {
  return (
    <MainLayout title="System Settings">
      <SystemSettings />
    </MainLayout>
  );
};

export default SystemSettingsPage;
