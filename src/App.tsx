import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { GlobalView } from './components/GlobalView';
import { Predictions } from './components/Predictions';
import { Optimization } from './components/Optimization';
import { Alerts } from './components/Alerts';
import { Statistics } from './components/Statistics';

export default function App() {
  const [currentPage, setCurrentPage] = useState('global');

  const renderPage = () => {
    switch (currentPage) {
      case 'global':
        return <GlobalView />;
      case 'predictions':
        return <Predictions />;
      case 'optimization':
        return <Optimization />;
      case 'alerts':
        return <Alerts />;
      case 'statistics':
        return <Statistics />;
      default:
        return <GlobalView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}
