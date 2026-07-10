import React from 'react';
import { Animate } from 'easemotion-react';

export default function Portfolio() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Portfolio Grid</h2>
      <p>A motion-ready layout for project thumbnails and case studies.</p>
      <div className="ease-masonry"><article>Design System</article><article>Landing Page</article></div>
    </Animate>
  );
}
