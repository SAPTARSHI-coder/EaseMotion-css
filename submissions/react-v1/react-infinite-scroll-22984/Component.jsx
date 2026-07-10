import React from 'react';
import { Animate } from 'easemotion-react';

export default function InfiniteScroll() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Infinite Feed</h2>
      <p>A scroll-feed shell that can be wired to pagination callbacks.</p>
      <div className="ease-card"><p>Showing 24 items</p><button className="ease-btn">Load more</button></div>
    </Animate>
  );
}
