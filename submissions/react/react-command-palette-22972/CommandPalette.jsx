import React, { useState, useEffect } from 'react';
import { Animate } from 'easemotion-react';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  // Handle Cmd+K global shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen); // Toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex pt-[15vh] justify-center">
      {/* Backdrop */}
      <Animate type="fade-in" duration="fast" className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => onClose(false)} />
      
      {/* Palette Box */}
      <Animate type="slide-down" duration="fast" className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-fit max-h-[60vh]">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <span className="text-gray-400">🔍</span>
          <input 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation, components, or files..." 
            className="w-full text-lg outline-none bg-transparent placeholder-gray-400"
          />
          <kbd className="hidden sm:inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded border border-gray-200">ESC</kbd>
        </div>
        
        <div className="p-4 overflow-y-auto">
          {query.length > 0 ? (
            <Animate type="fade-in" className="flex flex-col gap-2">
              <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex justify-between items-center group">
                <span className="font-medium text-gray-700 group-hover:text-blue-600">React Wrapper Guide</span>
                <span className="text-xs text-gray-400">Documentation</span>
              </div>
              <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer flex justify-between items-center group">
                <span className="font-medium text-gray-700 group-hover:text-blue-600">useScrollReveal Hook</span>
                <span className="text-xs text-gray-400">API Reference</span>
              </div>
            </Animate>
          ) : (
            <div className="text-center py-10 text-gray-400 text-sm">
              Type to start searching...
            </div>
          )}
        </div>
      </Animate>
    </div>
  );
}
