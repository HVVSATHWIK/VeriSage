'use client';

interface Metrics {
  verificationAccuracy: number;
  dataProcessed: number;
  analysisTime: number;
}

interface DashboardProps {
  metrics: Metrics;
}

export default function Dashboard({ metrics }: DashboardProps) {
  return (
    <div className="h-full bg-gray-900 p-4 space-y-4">
      <h2 className="text-xl font-semibold text-white">Verification Metrics</h2>
      
      <div className="space-y-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-sm text-gray-400">Verification Accuracy</h3>
          <p className="text-2xl font-bold text-white">{metrics.verificationAccuracy}%</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-sm text-gray-400">Data Processed</h3>
          <p className="text-2xl font-bold text-white">{metrics.dataProcessed} items</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-sm text-gray-400">Analysis Time</h3>
          <p className="text-2xl font-bold text-white">{metrics.analysisTime}s</p>
        </div>
      </div>
    </div>
  );
}