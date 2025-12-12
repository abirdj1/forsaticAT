import React, { useState } from 'react';
import { Radio, Zap, AlertCircle } from 'lucide-react';

interface Antenna {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'optimal' | 'warning' | 'alert';
  consumption: number;
  traffic: number;
}

export function AntennaMap() {
  const [selectedAntenna, setSelectedAntenna] = useState<Antenna | null>(null);

  const antennas: Antenna[] = [
    { id: '1', name: 'Alger-01', lat: 36.7, lng: 3.2, status: 'optimal', consumption: 145, traffic: 78 },
    { id: '2', name: 'Alger-02', lat: 36.8, lng: 3.1, status: 'warning', consumption: 167, traffic: 45 },
    { id: '3', name: 'Oran-01', lat: 35.7, lng: -0.6, status: 'optimal', consumption: 132, traffic: 82 },
    { id: '4', name: 'Oran-05', lat: 35.6, lng: -0.7, status: 'warning', consumption: 154, traffic: 38 },
    { id: '5', name: 'Constantine-01', lat: 36.3, lng: 6.6, status: 'optimal', consumption: 138, traffic: 71 },
    { id: '6', name: 'Annaba-01', lat: 36.9, lng: 7.8, status: 'alert', consumption: 189, traffic: 52 },
    { id: '7', name: 'Tlemcen-01', lat: 34.9, lng: -1.3, status: 'optimal', consumption: 128, traffic: 65 },
    { id: '8', name: 'Sétif-01', lat: 36.2, lng: 5.4, status: 'optimal', consumption: 141, traffic: 69 },
  ];

  const getStatusColor = (status: Antenna['status']) => {
    switch (status) {
      case 'optimal':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'alert':
        return 'bg-red-500';
    }
  };

  const getStatusLabel = (status: Antenna['status']) => {
    switch (status) {
      case 'optimal':
        return 'Optimal';
      case 'warning':
        return 'Optimisable';
      case 'alert':
        return 'Alerte';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-gray-900 mb-4">Carte des Antennes</h2>
      
      <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-96 mb-4 overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,30 Q30,20 40,30 T60,30 T80,30" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <path d="M15,50 Q35,45 45,55 T75,55" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <path d="M25,70 Q40,65 55,70 T85,70" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Antennas */}
        {antennas.map((antenna) => (
          <button
            key={antenna.id}
            onClick={() => setSelectedAntenna(antenna)}
            className="absolute group"
            style={{
              left: `${((antenna.lng + 2) / 10) * 100}%`,
              top: `${(1 - (antenna.lat - 34) / 4) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative">
              {/* Pulse animation for alerts */}
              {antenna.status === 'alert' && (
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              )}
              
              {/* Antenna marker */}
              <div className={`relative ${getStatusColor(antenna.status)} p-3 rounded-full shadow-lg transform transition-transform group-hover:scale-110`}>
                <Radio className="w-5 h-5 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                  <div>{antenna.name}</div>
                  <div className="text-gray-300">Trafic: {antenna.traffic}%</div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Antenna Details */}
      {selectedAntenna ? (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`${getStatusColor(selectedAntenna.status)} p-2 rounded-lg`}>
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">{selectedAntenna.name}</h3>
                <span className={`text-sm ${
                  selectedAntenna.status === 'optimal' ? 'text-green-600' :
                  selectedAntenna.status === 'warning' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {getStatusLabel(selectedAntenna.status)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <Zap className="w-4 h-4" />
                <span>Consommation</span>
              </div>
              <p className="text-gray-900">{selectedAntenna.consumption} kWh</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <Radio className="w-4 h-4" />
                <span>Trafic</span>
              </div>
              <p className="text-gray-900">{selectedAntenna.traffic}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center text-gray-500">
          Cliquez sur une antenne pour voir les détails
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">Optimal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-sm text-gray-600">Optimisable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">Alerte</span>
        </div>
      </div>
    </div>
  );
}
