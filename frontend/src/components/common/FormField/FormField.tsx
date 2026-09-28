import React from 'react';
import './FormField.css';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, children }) => {
  return (
    <div className="form-field-container">
      <label className="form-field-label">{label}</label>
      {children}
    </div>
  );
};

export default FormField;
