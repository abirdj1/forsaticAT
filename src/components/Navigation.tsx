import React from 'react';
import { BarChart3, Activity, Zap, Bell, TrendingUp, Radio } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'global', label: 'Vue Globale', icon: BarChart3 },
    { id: 'predictions', label: 'Prédictions IA', icon: Activity },
    { id: 'optimization', label: 'Optimisation', icon: Zap },
    { id: 'alerts', label: 'Alertes', icon: Bell },
    { id: 'statistics', label: 'Statistiques & ROI', icon: TrendingUp },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <Radio className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">EcoTelecom</span>
          </div>
          
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
