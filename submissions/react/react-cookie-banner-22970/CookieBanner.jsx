import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <Animate 
        type="slide-up" 
        duration="medium"
        className="bg-gray-900 text-white rounded-xl shadow-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between pointer-events-auto"
      >
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg mb-1">🍪 We use cookies</h3>
          <p className="text-gray-400 text-sm">
            This website uses cookies to enhance your browsing experience and analyze site traffic.
          </p>
        </div>
        <div className="flex gap-3">
          <Animate tag="button" hover="lift" onClick={() => setIsVisible(false)} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
            Decline
          </Animate>
          <Animate tag="button" hover="glow" onClick={() => setIsVisible(false)} className="px-6 py-2 text-sm font-bold bg-blue-600 rounded-lg text-white">
            Accept All
          </Animate>
        </div>
      </Animate>
    </div>
  );
}
