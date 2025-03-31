'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import Navigation from '@/app/components/Navigation';

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
} 