import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingDown, DollarSign, Leaf, Calendar, Download } from 'lucide-react';

export function Statistics() {
  const monthlySavings = [
    { month: 'Jan', economies: 520000, co2: 2340 },
    { month: 'Fév', economies: 580000, co2: 2610 },
    { month: 'Mar', economies: 620000, co2: 2790 },
    { month: 'Avr', economies: 750000, co2: 3375 },
    { month: 'Mai', economies: 890000, co2: 4005 },
    { month: 'Jun', economies: 920000, co2: 4140 },
    { month: 'Jul', economies: 1050000, co2: 4725 },
    { month: 'Aoû', economies: 1120000, co2: 5040 },
    { month: 'Sep', economies: 980000, co2: 4410 },
    { month: 'Oct', economies: 1080000, co2: 4860 },
    { month: 'Nov', economies: 1150000, co2: 5175 },
    { month: 'Déc', economies: 1240000, co2: 5580 },
  ];

  const savingsByCategory = [
    { name: 'Puissance Radio', value: 35, amount: 3850000 },
    { name: 'Climatisation', value: 42, amount: 4620000 },
    { name: 'Modules Veille', value: 18, amount: 1980000 },
    { name: 'Autres', value: 5, amount: 550000 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

  const totalSavings = monthlySavings.reduce((acc, curr) => acc + curr.economies, 0);
  const totalCO2 = monthlySavings.reduce((acc, curr) => acc + curr.co2, 0);
  const initialInvestment = 5000000; // 5M DA
  const monthlyAvg = totalSavings / 12;
  const roiMonths = Math.ceil(initialInvestment / monthlyAvg);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Statistiques & ROI</h1>
          <p className="text-gray-600">Analyse des économies réalisées et retour sur investissement</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Download className="w-4 h-4" />
          Exporter Rapport
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5" />
            <span>Économies Totales</span>
          </div>
          <p className="mb-1">{(totalSavings / 1000000).toFixed(1)}M DA</p>
          <p className="text-green-100 text-sm">Cette année</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5" />
            <span>Moyenne Mensuelle</span>
          </div>
          <p className="mb-1">{Math.round(monthlyAvg / 1000)}K DA</p>
          <p className="text-blue-100 text-sm">Par mois</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-5 h-5" />
            <span>CO₂ Évité</span>
          </div>
          <p className="mb-1">{(totalCO2 / 1000).toFixed(1)} tonnes</p>
          <p className="text-purple-100 text-sm">Cette année</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5" />
            <span>ROI Estimé</span>
          </div>
          <p className="mb-1">{roiMonths} mois</p>
          <p className="text-orange-100 text-sm">Retour sur investissement</p>
        </div>
      </div>

      {/* Monthly Savings Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Évolution des Économies Mensuelles</h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={monthlySavings}>
            <defs>
              <linearGradient id="colorEconomies" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value: number) => `${(value / 1000).toFixed(0)}K DA`}
            />
            <Area
              type="monotone"
              dataKey="economies"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEconomies)"
              name="Économies (DA)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* CO2 Savings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-gray-900 mb-6">CO₂ Évité par Mois (kg)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySavings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="co2" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Savings by Category */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-gray-900 mb-6">Répartition des Économies</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={savingsByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {savingsByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value: number, name: string, props: any) => [
                  `${(props.payload.amount / 1000).toFixed(0)}K DA (${value}%)`,
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-gray-900 mb-6">Analyse du Retour sur Investissement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gray-900 mb-4">Investissement Initial</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Plateforme EcoTelecom</span>
                <span className="text-gray-900">3,500,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Installation & Formation</span>
                <span className="text-gray-900">1,000,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Intégration Systèmes</span>
                <span className="text-gray-900">500,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-green-100 rounded-lg border border-green-200">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">5,000,000 DA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Économies Projetées</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Mois 1-6</span>
                <span className="text-green-600">+4,710,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Mois 7-12</span>
                <span className="text-green-600">+6,470,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Année 2</span>
                <span className="text-green-600">+14,880,000 DA</span>
              </div>
              <div className="flex justify-between p-3 bg-green-100 rounded-lg border border-green-200">
                <span className="text-gray-900">ROI</span>
                <span className="text-green-600">{roiMonths} mois</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900 mb-1">Projection sur 5 ans</p>
          <p className="text-blue-700">
            Avec une économie moyenne mensuelle de <strong>{Math.round(monthlyAvg / 1000)}K DA</strong>, 
            le retour sur investissement sera atteint en <strong>{roiMonths} mois</strong>. 
            Sur 5 ans, les économies totales estimées s'élèvent à <strong>66M DA</strong>.
          </p>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
        <h2 className="mb-6">Impact Global de l'Optimisation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-green-100 mb-2">Réduction Énergétique</p>
            <p className="mb-1">28.5%</p>
            <p className="text-green-100 text-sm">Moyenne annuelle</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-green-100 mb-2">Équivalent CO₂</p>
            <p className="mb-1">2,180 arbres</p>
            <p className="text-green-100 text-sm">Plantés cette année</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-green-100 mb-2">Impact Financier</p>
            <p className="mb-1">11M DA</p>
            <p className="text-green-100 text-sm">Économisés cette année</p>
          </div>
        </div>
      </div>
    </div>
  );
}
