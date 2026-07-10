import React from 'react';
import { Animate } from 'easemotion-react';

export default function ScrollSnap() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Scroll Snap Panels</h2>
      <p>A horizontally snapping strip for feature tours.</p>
      <section className="ease-card"><p>Panel 1</p><p>Panel 2</p><p>Panel 3</p></section>
    </Animate>
  );
}
