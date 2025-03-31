import React from 'react';
import Link from 'next/link';

export default function DefaultPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Something really cool is coming here!!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Stay tuned for amazing features and updates!
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 