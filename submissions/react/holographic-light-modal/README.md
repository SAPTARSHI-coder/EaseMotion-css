# React Modal Component with Shimmer Pulse (Holographic Light)

A premium, drop-in React Modal component designed specifically for Holographic Light interfaces. It pairs intensely frosted glass (`backdrop-filter`) with a sweeping, iridescent (Cyan/Magenta/Yellow) shimmer pulse that emulates holographic foil.

## Features
- 💿 **Holographic Foil Pulse**: A sweeping gradient utilizing `mix-blend-mode: color-dodge` to create a luminous, physical foil effect across the modal.
- 🪞 **Light Glassmorphism**: High-brightness translucent backgrounds with intense white inner shadows to separate the modal from the overlay.
- ⚡ **EaseMotion Integration**: Utilizes `ease-fade-in` and `ease-zoom-in` utility classes for flawless mount/unmount animations.
- 🔒 **Body Scroll Locking**: Automatically handles locking the background scroll when the modal is active.

## Props

| Prop       | Type       | Default  | Description                                                                 |
|------------|------------|----------|-----------------------------------------------------------------------------|
| `isOpen`   | `boolean`  | Required | Controls the visibility of the modal.                                       |
| `onClose`  | `function` | Required | Callback fired when the backdrop or close button is clicked.                |
| `title`    | `string`   | `null`   | Optional title displayed in the modal header.                               |
| `children` | `node`     | Required | The content to render inside the modal body.                                |

## Usage Example

```jsx
import React, { useState } from 'react';
import HoloModal from './HoloModal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-container">
      <button 
        className="ease-hover-lift" 
        onClick={() => setModalOpen(true)}
      >
        Open Holographic Modal
      </button>

      <HoloModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)}
        title="Premium Access Required"
      >
        <p>Unlock our highest tier to access the holographic asset library. Your creative limits are boundless.</p>
        <button className="upgrade-btn">Upgrade Now</button>
      </HoloModal>
    </div>
  );
};

export default App;