import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Moon, Sun, DollarSign } from 'lucide-react';

export function Predictions() {
  const trafficData = [
    { time: '00h', actual: 120, predicted: 115, label: '00:00' },
    { time: '02h', actual: 85, predicted: 88, label: '02:00' },
    { time: '04h', actual: 75, predicted: 72, label: '04:00' },
    { time: '06h', actual: 145, predicted: 142, label: '06:00' },
    { time: '08h', actual: 285, predicted: 290, label: '08:00' },
    { time: '10h', actual: 320, predicted: 315, label: '10:00' },
    { time: '12h', actual: 385, predicted: 390, label: '12:00' },
    { time: '14h', actual: 360, predicted: 355, label: '14:00' },
    { time: '16h', actual: 340, predicted: 345, label: '16:00' },
    { time: '18h', actual: 420, predicted: 415, label: '18:00' },
    { time: '20h', actual: 390, predicted: 395, label: '20:00' },
    { time: '22h', actual: 245, predicted: 240, label: '22:00' },
    { time: '24h', actual: 160, predicted: 155, label: '24:00' },
  ];

  const weeklyTrendData = [
    { day: 'Lun', traffic: 3200, consumption: 850 },
    { day: 'Mar', traffic: 3100, consumption: 820 },
    { day: 'Mer', traffic: 3300, consumption: 870 },
    { day: 'Jeu', traffic: 3250, consumption: 845 },
    { day: 'Ven', traffic: 3400, consumption: 890 },
    { day: 'Sam', traffic: 2800, consumption: 720 },
    { day: 'Dim', traffic: 2600, consumption: 680 },
  ];

  const lowTrafficPeriods = [
    { period: '02:00 - 05:00', avgTraffic: '78 Mbps', savings: '3,200 DA', potential: 'Élevé' },
    { period: '13:00 - 14:00', avgTraffic: '185 Mbps', savings: '1,800 DA', potential: 'Moyen' },
    { period: '23:00 - 01:00', avgTraffic: '142 Mbps', savings: '2,400 DA', potential: 'Élevé' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Prédictions IA</h1>
        <p className="text-gray-600">Analyse prédictive du trafic et identification des opportunités d'économie</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span>Précision du modèle</span>
          </div>
          <p className="mb-1">96.8%</p>
          <p className="text-blue-100 text-sm">Basé sur 30 jours de données</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Moon className="w-5 h-5" />
            <span>Heures creuses détectées</span>
          </div>
          <p className="mb-1">8.5 heures/jour</p>
          <p className="text-purple-100 text-sm">Opportunités d'optimisation</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5" />
            <span>Économies Potentielles</span>
          </div>
          <p className="mb-1">87,500 DA/jour</p>
          <p className="text-green-100 text-sm">Avec optimisation complète</p>
        </div>
      </div>

      {/* Traffic Prediction Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Trafic Prédit vs Réel (Aujourd'hui)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" label={{ value: 'Mbps', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Trafic Prédit"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={2}
              name="Trafic Réel"
              dot={{ fill: '#10b981', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Trends */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Tendances Hebdomadaires</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weeklyTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
              name="Trafic (Mbps)"
            />
            <Area
              type="monotone"
              dataKey="consumption"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.3}
              name="Consommation (kWh)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Low Traffic Periods */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-gray-900 mb-6">Heures Creuses Identifiées</h2>
        <div className="space-y-4">
          {lowTrafficPeriods.map((period, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Moon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-900">{period.period}</p>
                  <p className="text-gray-600 text-sm">Trafic moyen: {period.avgTraffic}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-600">{period.savings}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  period.potential === 'Élevé' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  Potentiel {period.potential}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Sun className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-green-900 mb-1">Estimation des économies potentielles</p>
              <p className="text-green-700">
                En optimisant ces périodes creuses, vous pourriez économiser jusqu'à <strong>87,500 DA par jour</strong> soit environ <strong>2.6M DA par mois</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
