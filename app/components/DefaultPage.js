import React from 'react';

export default function DefaultPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Something really cool is coming here!!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Stay tuned for amazing features and updates!
        </p>
      </div>
    </div>
  );
} 