import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Zap, Wind, Radio, ArrowDown, ArrowUp, Activity } from 'lucide-react';

export function Optimization() {
  const beforeAfterData = [
    { name: 'Alger-01', avant: 165, apres: 118 },
    { name: 'Alger-02', avant: 178, apres: 125 },
    { name: 'Oran-01', avant: 152, apres: 112 },
    { name: 'Oran-05', avant: 189, apres: 132 },
    { name: 'Constantine', avant: 171, apres: 124 },
    { name: 'Annaba', avant: 198, apres: 145 },
  ];

  const optimizations = [
    {
      antenna: 'Alger-02',
      type: 'Puissance Radio',
      reduction: '28%',
      value: '-42 kWh',
      icon: Radio,
      color: 'blue',
    },
    {
      antenna: 'Oran-05',
      type: 'Climatisation',
      reduction: '35%',
      value: '-57 kWh',
      icon: Wind,
      color: 'cyan',
    },
    {
      antenna: 'Annaba-01',
      type: 'Module Veille',
      reduction: '27%',
      value: '-53 kWh',
      icon: Activity,
      color: 'purple',
    },
    {
      antenna: 'Constantine-01',
      type: 'Puissance Radio',
      reduction: '22%',
      value: '-38 kWh',
      icon: Radio,
      color: 'blue',
    },
    {
      antenna: 'Alger-01',
      type: 'Climatisation',
      reduction: '31%',
      value: '-47 kWh',
      icon: Wind,
      color: 'cyan',
    },
  ];

  const parameters = [
    {
      name: 'Puissance d\'Émission',
      before: '100%',
      after: '72%',
      status: 'reduced',
    },
    {
      name: 'Température Climatisation',
      before: '20°C',
      after: '24°C',
      status: 'increased',
    },
    {
      name: 'Modules Actifs',
      before: '12/12',
      after: '9/12',
      status: 'reduced',
    },
    {
      name: 'Ventilation',
      before: 'Max',
      after: 'Auto',
      status: 'optimized',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    purple: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Optimisation</h1>
        <p className="text-gray-600">Réductions appliquées et paramètres ajustés en temps réel</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-gray-600">Réduction Totale</span>
          </div>
          <p className="text-gray-900 mb-1">237 kWh</p>
          <div className="flex items-center gap-2 text-green-600">
            <ArrowDown className="w-4 h-4" />
            <span>28.5% d'économie</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Radio className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-600">Antennes Optimisées</span>
          </div>
          <p className="text-gray-900 mb-1">8 / 12</p>
          <p className="text-gray-600 text-sm">4 en surveillance</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-gray-600">Optimisations Actives</span>
          </div>
          <p className="text-gray-900 mb-1">15 actions</p>
          <p className="text-gray-600 text-sm">En cours d'exécution</p>
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Comparatif Avant/Après Optimisation</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={beforeAfterData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="avant" fill="#ef4444" name="Avant Optimisation" radius={[8, 8, 0, 0]} />
            <Bar dataKey="apres" fill="#10b981" name="Après Optimisation" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Applied Optimizations */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Réductions Appliquées</h2>
        <div className="space-y-3">
          {optimizations.map((opt, index) => {
            const Icon = opt.icon;
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`p-3 rounded-lg ${colorClasses[opt.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{opt.antenna}</p>
                    <p className="text-gray-600 text-sm">{opt.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-600">{opt.value}</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <ArrowDown className="w-4 h-4" />
                    <span>{opt.reduction}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Parameters Adjusted */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-gray-900 mb-6">Paramètres Ajustés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parameters.map((param, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-900 mb-3">{param.name}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Avant</p>
                  <p className="text-gray-900">{param.before}</p>
                </div>
                <div className="flex items-center gap-2">
                  {param.status === 'reduced' && <ArrowDown className="w-5 h-5 text-green-600" />}
                  {param.status === 'increased' && <ArrowUp className="w-5 h-5 text-blue-600" />}
                  {param.status === 'optimized' && <Activity className="w-5 h-5 text-purple-600" />}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Après</p>
                  <p className="text-gray-900">{param.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-900 mb-1">Impact des optimisations</p>
          <p className="text-green-700">
            Les ajustements automatiques ont permis une réduction de <strong>28.5% de la consommation énergétique</strong> tout en maintenant une qualité de service optimale.
          </p>
        </div>
      </div>
    </div>
  );
}
