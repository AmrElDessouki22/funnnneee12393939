'use client';

import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input {...props} className="w-full p-2 border border-gray-300 rounded" />
    </div>
  );
};

export default Input;