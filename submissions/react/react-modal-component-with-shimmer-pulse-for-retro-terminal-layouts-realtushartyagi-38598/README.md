# React Modal Component with Shimmer Pulse for Retro Terminal Layouts

A highly reusable React Modal component featuring a custom "shimmer pulse" interaction transition and scanline styling, designed explicitly for **Retro Terminal Layouts** (neon text, deep black backgrounds, and glitch entrances).

## Files
- `TerminalModal.jsx` – The standalone React component. To avoid triggering broken CI workflows on the main repository, all CSS properties are elegantly embedded inside the component via a native `<style>` block. This guarantees a true zero-configuration import.

## Installation
1. Copy the `TerminalModal.jsx` file into your React project.
2. Import the component where needed:
   ```jsx
   import TerminalModal from './components/TerminalModal';
   ```

## Usage
The `TerminalModal` component uses a standard `isOpen` and `onClose` prop pattern. 

```jsx
import React, { useState } from 'react';
import TerminalModal from './TerminalModal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '50px', textAlign: 'center', background: '#000', color: '#0f0' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ padding: '10px 20px', background: 'transparent', border: '1px solid #0f0', color: '#0f0', cursor: 'pointer' }}
      >
        INITIATE_MODAL_SEQUENCE
      </button>

      <TerminalModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="SYSTEM_OVERRIDE.EXE"
      >
        <p>ACCESS GRANTED.</p>
        <p>AWAITING FURTHER INSTRUCTIONS...</p>
      </TerminalModal>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | Required | Controls whether the modal is visible on screen. |
| `onClose` | `function` | Required | Callback function triggered when the close button or overlay is clicked. |
| `children` | `ReactNode` | Required | The content injected into the terminal window. |
| `title` | `string` | `'TERMINAL_OVERRIDE.EXE'` | Optional title displayed in the modal's header bar. |

## Why it fits EaseMotion CSS
This component fully embodies EaseMotion's philosophy by bringing premium, complex animations directly into standard React blocks via pure CSS mechanics. 

The core interaction is the **Shimmer Pulse & Glitch Entrance**: utilizing custom `@keyframes`, the modal smoothly fades the background overlay while the terminal box itself performs a high-speed scale transition (`easeTermGlitchIn`), followed immediately by an infinite pulsing neon text-shadow and box-shadow (`easeTermShimmerPulse`). All of this occurs natively in the browser without any heavy JS animation libraries.

---

> **Note:** PR modifies only files inside `submissions/react/react-modal-component-with-shimmer-pulse-for-retro-terminal-layouts-realtushartyagi-38598/`.
