import React from 'react';
import { Animate } from 'easemotion-react';

export default function SidebarCollapse() {
  return (
    <Animate type="fade-in" className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Collapsible Sidebar</h2>
      <p>A navigation shell with a compact animated sidebar state.</p>
      <nav className="ease-sidebar"><a href="#overview">Overview</a><a href="#settings">Settings</a></nav>
    </Animate>
  );
}
