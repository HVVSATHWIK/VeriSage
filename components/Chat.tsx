'use client';

import { useEffect, useRef } from 'react';
import { Switch } from '@/components/ui/switch';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

interface ChatProps {
  messages: Message[];
  previewMode: boolean;
  onPreviewModeChange: (enabled: boolean) => void;
}

export default function Chat({ messages, previewMode, onPreviewModeChange }: ChatProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const displayMessages = previewMode
    ? messages.slice(-1)
    : messages;

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h3 className="text-white font-medium">Verification Insights</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Preview Mode</span>
          <Switch
            checked={previewMode}
            onCheckedChange={onPreviewModeChange}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {displayMessages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {message.content}
              </pre>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}