import React, { useState } from 'react';
import { AlertTriangle, Thermometer, Zap, Radio, Bell, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'consumption' | 'temperature' | 'anomaly' | 'equipment';
  severity: 'critical' | 'warning' | 'info';
  antenna: string;
  message: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'acknowledged';
  value?: string;
}

export function Alerts() {
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');

  const alerts: Alert[] = [
    {
      id: '1',
      type: 'consumption',
      severity: 'critical',
      antenna: 'Annaba-01',
      message: 'Surconsommation détectée : +45% par rapport à la normale',
      timestamp: '2025-12-11 14:23',
      status: 'active',
      value: '198 kWh',
    },
    {
      id: '2',
      type: 'temperature',
      severity: 'warning',
      antenna: 'Oran-05',
      message: 'Température excessive dans le module de climatisation',
      timestamp: '2025-12-11 13:45',
      status: 'active',
      value: '32°C',
    },
    {
      id: '3',
      type: 'anomaly',
      severity: 'warning',
      antenna: 'Alger-02',
      message: 'Consommation élevée malgré faible trafic détecté',
      timestamp: '2025-12-11 12:10',
      status: 'acknowledged',
      value: '167 kWh',
    },
    {
      id: '4',
      type: 'equipment',
      severity: 'critical',
      antenna: 'Constantine-01',
      message: 'Anomalie détectée sur le système de refroidissement',
      timestamp: '2025-12-11 11:30',
      status: 'active',
    },
    {
      id: '5',
      type: 'consumption',
      severity: 'info',
      antenna: 'Tlemcen-01',
      message: 'Consommation optimale - Économie de 22%',
      timestamp: '2025-12-11 10:15',
      status: 'resolved',
      value: '128 kWh',
    },
    {
      id: '6',
      type: 'temperature',
      severity: 'warning',
      antenna: 'Sétif-01',
      message: 'Température en augmentation progressive',
      timestamp: '2025-12-11 09:50',
      status: 'resolved',
      value: '28°C',
    },
  ];

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'consumption':
        return Zap;
      case 'temperature':
        return Thermometer;
      case 'anomaly':
        return AlertTriangle;
      case 'equipment':
        return Radio;
    }
  };

  const getSeverityColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'info':
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const getStatusBadge = (status: Alert['status']) => {
    switch (status) {
      case 'active':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Active</span>;
      case 'acknowledged':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Pris en compte</span>;
      case 'resolved':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Résolue</span>;
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'active') return alert.status === 'active';
    if (filter === 'resolved') return alert.status === 'resolved';
    return true;
  });

  const activeCount = alerts.filter(a => a.status === 'active').length;
  const criticalCount = alerts.filter(a => a.severity === 'critical' && a.status === 'active').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Alertes & Notifications</h1>
        <p className="text-gray-600">Surveillance en temps réel des anomalies et événements</p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-100 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-gray-600">Alertes Actives</span>
          </div>
          <p className="text-gray-900">{activeCount}</p>
          <p className="text-gray-600 text-sm">Dont {criticalCount} critiques</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-gray-600">Résolues Aujourd'hui</span>
          </div>
          <p className="text-gray-900">2</p>
          <p className="text-gray-600 text-sm">Temps moyen: 45 min</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-600">En Attente</span>
          </div>
          <p className="text-gray-900">1</p>
          <p className="text-gray-600 text-sm">Action requise</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Filtrer:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Actives ({activeCount})
            </button>
            <button
              onClick={() => setFilter('resolved')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'resolved'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Résolues
            </button>
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const Icon = getAlertIcon(alert.type);
          return (
            <div
              key={alert.id}
              className={`bg-white rounded-xl p-6 shadow-sm border-2 ${
                alert.status === 'active' ? getSeverityColor(alert.severity) : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-lg ${
                    alert.severity === 'critical' ? 'bg-red-100' :
                    alert.severity === 'warning' ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      alert.severity === 'critical' ? 'text-red-600' :
                      alert.severity === 'warning' ? 'text-yellow-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-gray-900">{alert.antenna}</h3>
                      {getStatusBadge(alert.status)}
                    </div>
                    <p className="text-gray-700 mb-2">{alert.message}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{alert.timestamp}</span>
                      </div>
                      {alert.value && (
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          <span>{alert.value}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {alert.status === 'active' && (
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Prendre en compte
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Résoudre
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-gray-900 mb-2">Aucune alerte</h3>
          <p className="text-gray-600">Toutes vos antennes fonctionnent de manière optimale</p>
        </div>
      )}
    </div>
  );
}
