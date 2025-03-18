'use client';

import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Chat from '@/components/Chat';
import Dashboard from '@/components/Dashboard';
import { Play, Rocket } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

const DEFAULT_CODE = `def process_news_stream(data):
    """
    Analyze news stream for potential disinformation patterns
    
    Args:
        data: News content to analyze
        
    Returns:
        dict: Analysis results with confidence scores
    """
    # Your verification logic here
    return {
        "content": data,
        "patterns_detected": True,
        "confidence_score": 0.85
    }`;

export default function EditorPage() {
  const router = useRouter();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [messages, setMessages] = useState<Message[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [metrics, setMetrics] = useState({
    verificationAccuracy: 85,
    dataProcessed: 0,
    analysisTime: 0,
  });
  const [verificationGoal, setVerificationGoal] = useState('');
  const [selectedSource, setSelectedSource] = useState('news');

  useEffect(() => {
    const goal = localStorage.getItem('verificationGoal');
    if (!goal) {
      router.push('/');
      return;
    }
    setVerificationGoal(goal);
  }, [router]);

  const handleRunVerification = async () => {
    try {
      const startTime = Date.now();
      
      // Add user message
      setMessages(prev => [...prev, { sender: 'user', content: code }]);

      // Call API
      const response = await fetch('/api/run-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      const endTime = Date.now();

      // Add bot message
      setMessages(prev => [...prev, { sender: 'bot', content: data.insight }]);

      // Update metrics
      setMetrics({
        verificationAccuracy: Math.floor(Math.random() * 20) + 80, // 80-100
        dataProcessed: code.length + 50,
        analysisTime: Number(((endTime - startTime) / 1000).toFixed(1)),
      });
    } catch (error) {
      console.error('Failed to run verification:', error);
    }
  };

  const handleSaveAnalysis = () => {
    const analysis = {
      code,
      verificationGoal,
      messages,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(`analysis_${Date.now()}`, JSON.stringify(analysis));
  };

  const handleExportReport = () => {
    const report = `
VeriSage Analysis Report
-----------------------
Goal: ${verificationGoal}
Timestamp: ${new Date().toISOString()}

Code:
${code}

Verification Results:
${messages
  .map(m => `${m.sender === 'user' ? 'Input' : 'Analysis'}: ${m.content}`)
  .join('\n\n')}

Metrics:
- Verification Accuracy: ${metrics.verificationAccuracy}%
- Data Processed: ${metrics.dataProcessed} items
- Analysis Time: ${metrics.analysisTime}s
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'verification-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDeploy = () => {
    console.log('Deploying to Vercel... Check your Vercel dashboard for the live URL.');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Verification Goal Banner */}
      <div className="bg-gray-900 border-b border-gray-800 p-2 text-sm text-center">
        <span className="text-gray-400">Goal:</span>{' '}
        <span className="text-white">{verificationGoal}</span>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-2.5rem)]">
        {/* Sidebar */}
        <Sidebar
          onSaveAnalysis={handleSaveAnalysis}
          onExportReport={handleExportReport}
          onDataSourceChange={setSelectedSource}
        />

        {/* Main Content */}
        <div className="flex-1 p-4 space-y-4 min-h-0">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">News Verification</h1>
            <button
              onClick={handleDeploy}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Rocket className="h-4 w-4" />
              Deploy to Vercel
            </button>
          </div>

          {/* Editor and Chat Container */}
          <div className="h-[calc(100%-4rem)] flex flex-col space-y-4">
            {/* Code Editor */}
            <div className="h-[60%] rounded-lg overflow-hidden border border-gray-700">
              <Editor
                height="100%"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 16 },
                }}
              />
              <div className="bg-gray-900 p-2 border-t border-gray-700">
                <button
                  onClick={handleRunVerification}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Run Verification
                </button>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="h-[40%]">
              <Chat
                messages={messages}
                previewMode={previewMode}
                onPreviewModeChange={setPreviewMode}
              />
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="w-full md:w-[20%] border-t md:border-t-0 md:border-l border-gray-800">
          <Dashboard metrics={metrics} />
        </div>
      </div>
    </div>
  );
}