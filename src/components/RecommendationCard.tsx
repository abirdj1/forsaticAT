import React from 'react';
import { AlertCircle, TrendingDown, CheckCircle } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  priority: 'high' | 'medium' | 'low';
}

export function RecommendationCard({ title, description, impact, priority }: RecommendationCardProps) {
  const priorityConfig = {
    high: { color: 'border-red-200 bg-red-50', icon: AlertCircle, iconColor: 'text-red-600' },
    medium: { color: 'border-yellow-200 bg-yellow-50', icon: TrendingDown, iconColor: 'text-yellow-600' },
    low: { color: 'border-green-200 bg-green-50', icon: CheckCircle, iconColor: 'text-green-600' },
  };

  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <div className={`rounded-lg p-4 border ${config.color}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${config.iconColor} flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <p className="text-green-700">{impact}</p>
        </div>
      </div>
    </div>
  );
}
