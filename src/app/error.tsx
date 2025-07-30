'use client';

import { ReactNode } from 'react';

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorBoundary = ({ error, resetErrorBoundary }: ErrorBoundaryProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold text-red-600">Something went wrong:</h2>
      <pre className="text-sm text-gray-800">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;