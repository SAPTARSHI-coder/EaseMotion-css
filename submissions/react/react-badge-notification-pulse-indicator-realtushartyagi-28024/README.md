# React Badge Notification Pulse Indicator

A lightweight, accessible React wrapper component that renders a classic "Notification Dot" in the top-right corner of any wrapped child element. When active, it utilizes a pure CSS `@keyframes` loop to continuously pulse outward, drawing the user's attention without relying on heavy JS animation timers.

## Files
- `BadgeNotification.jsx` – The core React component that serves as a flexible positioning wrapper and renders the semantic `role="status"` markup.
- `BadgeNotification.css` – The stylesheet that powers the absolute positioning and the infinitely looping `easeBadgePulseLoop` keyframe animation.

## How it works
1. **The Wrapper Concept**: By wrapping a target child element (like a bell icon or a profile avatar), the component establishes a `position: relative` boundary.
2. **Dynamic Colors via CSS Variables**: The React component accepts a `color` prop and dynamically assigns it to the inline CSS variable `--badge-pulse-color`. This allows a single, generic CSS class to pulse in any brand color (e.g., Red for errors, Green for live status).
3. **The Dual-Layer Pulse**: To ensure the core dot remains fully visible at all times, the markup splits the dot into two layers: a static outer `<span>` (the dot), and an inner `<span>` (`.ease-badge-pulse-ring`) which executes the infinite `transform: scale()` fading loop.

## Installation & Usage

1. Copy both `BadgeNotification.jsx` and `BadgeNotification.css` into your React project.
2. Wrap any element (icon, text, button) with the component.

```jsx
import React, { useState } from 'react';
import BadgeNotification from './components/BadgeNotification';

const App = () => {
  const [hasUnread, setHasUnread] = useState(true);

  return (
    <div style={{ padding: '4rem', display: 'flex', gap: '2rem' }}>
      
      {/* Example 1: Standard Red Alert on a generic div/icon */}
      <BadgeNotification active={hasUnread} ariaLabel="3 unread messages">
        <div style={{ padding: '12px', backgroundColor: '#e2e8f0', borderRadius: '8px' }}>
          Inbox 📬
        </div>
      </BadgeNotification>

      {/* Example 2: Green Live Status Indicator */}
      <BadgeNotification active={true} color="#22c55e" ariaLabel="System Operational">
        <div style={{ padding: '12px', backgroundColor: '#e2e8f0', borderRadius: '8px' }}>
          Server 🟢
        </div>
      </BadgeNotification>

      <button onClick={() => setHasUnread(!hasUnread)} style={{ marginLeft: 'auto' }}>
        Toggle Inbox State
      </button>

    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *Required* | The element you wish to attach the badge to. |
| `active` | `boolean` | `true` | Conditionally mounts/unmounts the entire badge. |
| `color` | `string` | `'#ef4444'` | The hex/rgb color driving the dot and the pulse animation. |
| `ariaLabel` | `string` | `'New notification'` | Screen reader text ensuring visually impaired users know the badge exists. |

## Accessibility (prefers-reduced-motion)
The component renders the badge as a semantic `role="status"` element and requires an `ariaLabel` so screen readers immediately announce new alerts. Crucially, it includes a strict `@media (prefers-reduced-motion: reduce)` block that entirely hides the `.ease-badge-pulse-ring`, leaving just the static color dot. This guarantees the UI draws attention without triggering vestibular sensitivity via infinite flashing animations.

## Why it fits EaseMotion CSS
EaseMotion champions lightweight, CSS-driven micro-interactions. Infinite looping animations (like pulsing dots) are notoriously bad for battery life and main-thread performance if built using JavaScript timers or heavy animation libraries (like Framer Motion). By isolating the pulse logic into a native, hardware-accelerated CSS keyframe that scales and fades, this component guarantees buttery smooth 60fps performance with a microscopic bundle footprint.
