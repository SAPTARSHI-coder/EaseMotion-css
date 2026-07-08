# React Component: Shimmer Pulse Modal with Smooth Interaction Motion

A modular, copy-paste ready React modal component for the EaseMotion CSS framework that provides a minimalist tech-style dialog with smooth entrance animation and a shimmer pulse interaction effect.

## 📦 What's included?

- `ShimmerPulseModal.jsx`: The core React component handling modal rendering, accessibility, keyboard interaction, and state-controlled visibility.
- `style.css`: Component-specific styling including modal layout, shimmer pulse animation, responsive behavior, and transition effects.
- `demo.html`: A self-contained browser demo running the React component through Babel standalone without any build setup.

## 🛠 Features

- **Smooth Modal Entrance**: The modal appears with a polished scale and fade transition for a premium UI feel.
- **Shimmer Pulse Interaction**: A subtle animated highlight creates a modern technology-inspired surface effect.
- **Controlled React API**: Visibility and actions are managed through simple reusable props.
- **Keyboard Accessible**: Supports closing the modal using the Escape key.
- **Overlay Dismissal**: Clicking outside the modal closes the dialog naturally.
- **Accessible Dialog Structure**: Uses semantic dialog attributes including `role="dialog"` and `aria-modal="true"`.
- **Responsive Design**: Works smoothly across desktop and mobile layouts.
- **Zero External Dependencies**: Built using React and CSS only.

## 🚀 How to use

1. Copy `ShimmerPulseModal.jsx` into your React project's components directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React, { useState } from "react";
import ShimmerPulseModal from "./ShimmerPulseModal";
import "./style.css";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <ShimmerPulseModal
        isOpen={open}
        title="Premium Modal"
        onClose={() => setOpen(false)}
      >
        <p>
          Smooth shimmer pulse interaction powered by EaseMotion.
        </p>
      </ShimmerPulseModal>
    </>
  );
};

export default App;
```

## ⚙️ Props Reference

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | `boolean` | `false` | Controls whether the modal is visible |
| `onClose` | `function` | `undefined` | Callback fired when the modal closes |
| `title` | `string` | `"Modal"` | Heading displayed in the modal header |
| `children` | `ReactNode` | — | Content rendered inside the modal |
| `showClose` | `boolean` | `true` | Controls visibility of the close button |
| `className` | `string` | `""` | Additional custom CSS classes |

## 🎨 EaseMotion Integration

This component uses EaseMotion utility classes to provide reusable motion behavior:

| Class | Purpose |
|---|---|
| `ease-fade-in` | Smooth modal appearance |
| `ease-hover-shimmer` | Shimmer interaction highlight |
| `ease-hover-lift` | Enhanced close button interaction |
| `ease-hover-grow` | Demo button hover animation |

The component combines EaseMotion utility classes with custom CSS animation layers to create a polished modal experience while keeping the implementation lightweight.

## ♿ Accessibility

- Uses `role="dialog"` for screen reader support.
- Includes `aria-modal="true"` for proper modal semantics.
- Provides an accessible close button.
- Supports keyboard dismissal using the Escape key.
- Prevents accidental interaction with modal content when clicking inside the dialog.

## 💡 Why this fits EaseMotion

Most basic React modals rely only on simple opacity changes or instant rendering.

This component focuses on the interaction details that make interfaces feel premium:

- The background smoothly transitions into focus.
- The modal enters with natural scale-based motion.
- The shimmer pulse creates subtle visual feedback.
- The implementation remains lightweight and dependency-free.

EaseMotion focuses on expressive motion through simple, readable utilities, and this component extends that philosophy into a reusable React UI block.