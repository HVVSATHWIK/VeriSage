'use client';

import { useState } from 'react';
import { Menu, Save, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SidebarProps {
  onSaveAnalysis: () => void;
  onExportReport: () => void;
  onDataSourceChange: (source: string) => void;
}

export default function Sidebar({
  onSaveAnalysis,
  onExportReport,
  onDataSourceChange,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`relative h-full bg-gray-900 text-white transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-full md:w-[20%]'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-4 hidden md:flex h-8 w-8 items-center justify-center bg-gray-800 rounded-full cursor-pointer"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      <div className="md:hidden p-4">
        <Menu className="h-6 w-6" />
      </div>

      <div className={`p-4 space-y-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <button
          onClick={onSaveAnalysis}
          className="w-full flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Save Analysis</span>
        </button>

        <button
          onClick={onExportReport}
          className="w-full flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <FileText className="h-4 w-4" />
          <span>Export Report</span>
        </button>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Data Source</label>
          <Select onValueChange={onDataSourceChange}>
            <SelectTrigger className="w-full bg-gray-800 border-gray-700">
              <SelectValue placeholder="Select Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="news">Mock News API</SelectItem>
              <SelectItem value="social">Mock Social Media</SelectItem>
              <SelectItem value="archives">Mock Archives</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}