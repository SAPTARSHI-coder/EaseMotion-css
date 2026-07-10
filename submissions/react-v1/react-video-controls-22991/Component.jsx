import React from 'react';
import { Animate } from 'easemotion-react';

export default function VideoControls() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Video Controls</h2>
      <p>Animated playback controls with a progress indicator and accessible button labels.</p>
      <div className="ease-card"><button aria-label="Play video">Play</button><input aria-label="Playback progress" type="range" min="0" max="100" defaultValue="45" /></div>
    </Animate>
  );
}
