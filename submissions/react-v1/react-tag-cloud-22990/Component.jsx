import React from 'react';
import { Animate } from 'easemotion-react';

export default function TagCloud() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Tag Cloud</h2>
      <p>A small animated cluster of topical tags.</p>
      <div><span className="ease-chip">CSS</span><span className="ease-chip">Motion</span><span className="ease-chip">Tokens</span></div>
    </Animate>
  );
}
