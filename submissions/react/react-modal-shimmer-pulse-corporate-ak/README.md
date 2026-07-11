# React Modal with Shimmer Pulse (Modern Corporate)

A React modal component with a shimmer pulse entrance transition, designed for Modern Corporate interfaces.

## Props

| Prop       | Type         | Default | Description                                      |
|------------|--------------|---------|---------------------------------------------------|
| `isOpen`   | `boolean`    | —       | Controls modal visibility                          |
| `onClose`  | `function`   | —       | Called when the modal should close (backdrop/Esc)  |
| `title`    | `string`     | —       | Modal header title                                  |
| `children` | `node`       | —       | Modal body content                                  |

## Usage

```jsx
import { useState } from "react";
import Modal from "./Modal";
import "./style.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm Action">
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}
```

## Why is this useful?

Modals are a core UI pattern in corporate dashboards and admin tools for confirmations, forms, and alerts. This component pairs a smooth pulse-in entrance with a shimmering top accent bar, giving Modern Corporate interfaces a polished, premium feel using only React state and CSS animations. It also handles Escape-to-close and backdrop-click-to-close for accessibility.
