import React from 'react';
import { Animate } from 'easemotion-react';

export default function BlogList() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Latest Articles</h2>
      <p>A stagger-friendly article list for documentation updates and release posts.</p>
      <ul><li>Release notes</li><li>Animation recipes</li><li>Component patterns</li></ul>
    </Animate>
  );
}
