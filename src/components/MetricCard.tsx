import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  color: 'blue' | 'yellow' | 'orange' | 'green';
  trend?: number;
}

export function MetricCard({ label, value, unit, icon: Icon, color, trend }: MetricCardProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    orange: 'bg-orange-100 text-orange-700',
    green: 'bg-green-100 text-green-700',
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 ${trend < 0 ? 'text-green-600' : 'text-blue-600'}`}>
            {trend < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
            <span className="text-sm">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-gray-900">{value}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
    </div>
  );
}
