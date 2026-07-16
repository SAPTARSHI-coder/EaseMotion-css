# React Component: Dynamic Modal Dialog with Backdrop Blur & Scale-Up (#28102)

A modular, copy-paste ready React `<Modal>` component providing a dynamic dialog window. It features a glassmorphism backdrop blur, a physics-based spring entrance animation, unmount delay for exit animations, body scroll locking, and keyboard accessibility. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `Modal.jsx`: The React component that manages the 2-step internal render state (for exit animations), body scroll-locking (`overflow: hidden`), Escape key listener, and backdrop click handler.
- `style.css`: The CSS stylesheet powering the `backdrop-filter: blur()`, the `cubic-bezier` spring scale-up, and layout constraints (sizes `sm`, `md`, `lg`, `full`).
- `demo.html`: A self-contained demo showcasing 3 variants of the modal (Standard, Large Form, and Destructive) over a patterned background to demonstrate the blur effect — opens directly in a browser.

## 🛠 Features

- **Spring Scale-Up Entrance**: The dialog window enters with `transform: scale(0.95) translateY(10px) → scale(1) translateY(0)` using the signature `cubic-bezier(0.34, 1.56, 0.64, 1)` EaseMotion curve. 
- **Backdrop Blur**: Utilizes `backdrop-filter: blur(4px)` to obscure the background content, focusing the user's attention on the dialog.
- **Exit Animations**: React instantly unmounts conditional components. This component uses an internal `shouldRender` state coupled with `setTimeout` to wait 250ms when `isOpen` becomes false, allowing the CSS exit animation to play smoothly before the DOM node is removed.
- **Accessibility & Focus Trapping**: Closes when clicking the backdrop or pressing the `Escape` key. Automatically locks body scrolling when open.
- **Dynamic Sizing**: Supports 4 sizes (`sm`, `md`, `lg`, `full`) controlled via the `size` prop.
- **Modular Slots**: Separate injection zones for `title` (Header), `children` (Body), and `footer` (Action Buttons).

## 🚀 How to use

```jsx
import { useState } from 'react';
import Modal from './Modal';
import './style.css';

const MyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
        footer={
          <>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button onClick={() => alert('Saved!')}>Confirm</button>
          </>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    </div>
  );
};
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | — | Controls whether the modal is visible. |
| `onClose` | `function` | — | Callback fired when the backdrop, close button, or Escape key is pressed. |
| `title` | `string` | — | The text displayed in the modal header. |
| `children` | `ReactNode` | — | The main content rendered in the scrollable body of the modal. |
| `footer` | `ReactNode` | `null` | Optional content (usually buttons) rendered in the bottom bar. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Controls the `max-width` of the dialog window. |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

Modals are often abrupt, popping into existence instantly and completely disconnecting the user from the underlying context. By applying a `backdrop-filter: blur`, we maintain spatial context — the user subconsciously knows their previous page is right behind the glass. Combined with a slight scale-up spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`), the modal feels like a physical sheet of glass moving towards the user rather than an instant, disorienting context switch.
