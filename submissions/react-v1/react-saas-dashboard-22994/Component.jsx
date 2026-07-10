import React from 'react';
import { Animate } from 'easemotion-react';

export default function SaasDashboard() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Dashboard Overview</h2>
      <p>Animated metric cards for SaaS product analytics.</p>
      <div className="ease-card-grid"><strong>98%</strong><span>uptime</span></div>
    </Animate>
  );
}
