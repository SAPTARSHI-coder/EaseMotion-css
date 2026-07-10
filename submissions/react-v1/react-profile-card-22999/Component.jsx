import React from 'react';
import { Animate } from 'easemotion-react';

export default function ProfileCard() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Profile Card</h2>
      <p>An animated profile summary with avatar, role, and action.</p>
      <button className="ease-btn">View profile</button>
    </Animate>
  );
}
