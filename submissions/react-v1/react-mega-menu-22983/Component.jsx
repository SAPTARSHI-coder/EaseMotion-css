import React from 'react';
import { Animate } from 'easemotion-react';

export default function MegaMenu() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Mega Menu</h2>
      <p>A large animated navigation panel for grouped links.</p>
      <div className="ease-card"><a href="#docs">Docs</a><a href="#components">Components</a><a href="#examples">Examples</a></div>
    </Animate>
  );
}
