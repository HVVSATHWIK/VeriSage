'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Rocket } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [verificationGoal, setVerificationGoal] = useState('');

  const handleGetStarted = () => {
    if (verificationGoal.trim()) {
      localStorage.setItem('verificationGoal', verificationGoal);
      router.push('/editor');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Rocket className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to VeriSage
          </h1>
          <p className="text-lg text-gray-400">
            Real-time news verification powered by AI
          </p>
        </div>
        
        <div className="space-y-4 max-w-md mx-auto">
          <div className="space-y-2">
            <label htmlFor="goal" className="block text-sm font-medium text-gray-300 text-left">
              Verification Goal
            </label>
            <input
              id="goal"
              type="text"
              value={verificationGoal}
              onChange={(e) => setVerificationGoal(e.target.value)}
              placeholder="e.g., verify breaking news or detect propaganda shifts"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <button
            onClick={handleGetStarted}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Get Started
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Advanced news verification and disinformation detection
        </p>
      </div>
    </main>
  );
}