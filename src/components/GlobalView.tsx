import React from 'react';
import { AntennaMap } from './AntennaMap';
import { MetricCard } from './MetricCard';
import { TrendingDown, Zap, Thermometer, Radio, Leaf, DollarSign } from 'lucide-react';
import { RecommendationCard } from './RecommendationCard';

export function GlobalView() {
  const metrics = [
    {
      label: 'Trafic Actuel',
      value: '342',
      unit: 'Mbps',
      icon: Radio,
      color: 'blue',
      trend: -12,
    },
    {
      label: 'Consommation',
      value: '847',
      unit: 'kWh',
      icon: Zap,
      color: 'yellow',
      trend: -23,
    },
    {
      label: 'Température Moy.',
      value: '24',
      unit: '°C',
      icon: Thermometer,
      color: 'orange',
      trend: -8,
    },
    {
      label: 'Économies Aujourd\'hui',
      value: '12,450',
      unit: 'DA',
      icon: DollarSign,
      color: 'green',
      trend: 18,
    },
    {
      label: 'Énergie Économisée',
      value: '156',
      unit: 'kWh',
      icon: TrendingDown,
      color: 'green',
      trend: 25,
    },
    {
      label: 'CO₂ Évité',
      value: '89',
      unit: 'kg',
      icon: Leaf,
      color: 'green',
      trend: 25,
    },
  ];

  const recommendations = [
    {
      title: 'Réduire la puissance - Antenne Alger-02',
      description: 'Trafic faible détecté. Réduction de 15% recommandée.',
      impact: '2,300 DA/jour',
      priority: 'high' as const,
    },
    {
      title: 'Optimiser la climatisation - Zone Nord',
      description: 'Température extérieure clémente. Ajustement possible.',
      impact: '1,800 DA/jour',
      priority: 'medium' as const,
    },
    {
      title: 'Mise en veille module - Oran-05',
      description: 'Période creuse identifiée de 02h à 05h.',
      impact: '950 DA/jour',
      priority: 'medium' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Vue Globale</h1>
        <p className="text-gray-600">Supervision en temps réel de vos antennes télécom</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Map and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <AntennaMap />
        </div>
        <div className="space-y-4">
          <h2 className="text-gray-900">Optimisations Recommandées</h2>
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))}
        </div>
      </div>
    </div>
  );
}
