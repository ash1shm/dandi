'use client';

import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen ml-0 lg:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
} 