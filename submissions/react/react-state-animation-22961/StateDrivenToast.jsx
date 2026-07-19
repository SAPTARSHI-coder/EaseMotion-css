import React, { useEffect, useState } from 'react';
import { Animate } from 'easemotion-react';
// Simulating a Zustand/Redux store hook
import { useNotificationStore } from '../store'; 

export default function StateDrivenToast() {
  // Global state triggers
  const { notifications, removeNotification } = useNotificationStore();
  
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {notifications.map((notif) => (
        <Animate 
          key={notif.id}
          tag="div"
          type="slide-left" 
          duration="fast"
          className="bg-slate-900 text-white p-4 rounded-md shadow-xl flex items-center justify-between min-w-[300px]"
        >
          <span>{notif.message}</span>
          <button 
            onClick={() => removeNotification(notif.id)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </Animate>
      ))}
    </div>
  );
}
