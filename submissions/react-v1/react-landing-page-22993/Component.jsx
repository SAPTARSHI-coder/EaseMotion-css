import React from 'react';
import { Animate } from 'easemotion-react';

export default function LandingPage() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Launch Motion</h2>
      <p>A compact hero section with animated headline, supporting copy, and primary action.</p>
      <button className="ease-btn ease-btn-primary">Start building</button>
    </Animate>
  );
}
