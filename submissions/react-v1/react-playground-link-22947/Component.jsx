import React from 'react';
import { Animate } from 'easemotion-react';

export default function PlaygroundLink() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Playground Link</h2>
      <p>A reusable callout link that points users to an interactive demo.</p>
      <a className="ease-btn ease-btn-primary" href="/playground">Open playground</a>
    </Animate>
  );
}
