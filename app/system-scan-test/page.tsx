'use client';

export default function SystemScanTest() {
  return (
    <div className="w-full h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-orbitron font-bold text-white mb-4">
          SYSTEM SCAN
        </h1>
        <p className="text-cyber-blue text-xl font-mono">
          Testing Basic Styling
        </p>
        <div className="mt-8 p-6 border-2 border-cyber-blue bg-cyber-blue/10 rounded">
          <p className="text-cyber-red">Error detected</p>
          <p className="text-white">System status: Critical</p>
        </div>
      </div>
    </div>
  );
}
