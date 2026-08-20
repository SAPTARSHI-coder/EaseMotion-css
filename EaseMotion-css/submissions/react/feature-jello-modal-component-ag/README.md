# Jello Modal Component

## Description
The `JelloModal` component is a functional React modal that features an attention-seeking "jello" wobble animation when it opens. This is particularly useful for alerts, warnings, or modals that require immediate user focus. The component includes built-in accessibility features such as Escape key handling, backdrop click-to-close, and semantic ARIA attributes.

## Installation
Copy `JelloModal.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isOpen` | Boolean | Yes | - | Controls the visibility of the modal. |
| `onClose` | Function | Yes | - | Callback triggered when the backdrop or close button is clicked, or when the Escape key is pressed. |
| `children` | ReactNode | Yes | - | Content rendered inside the modal body. |
| `className`| String | No | `""` | Additional CSS classes for custom styling on the modal body. |

## Usage Example

```jsx
import React, { useState } from 'react';
import JelloModal from './JelloModal';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => setModalOpen(true)}>
                Open Important Alert
            </button>

            <JelloModal 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)}
            >
                <h2>System Warning</h2>
                <p>This action cannot be undone. Are you sure you want to proceed?</p>
                <button onClick={() => setModalOpen(false)}>Acknowledge</button>
            </JelloModal>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Keyboard Navigation:** The component automatically listens for the `Escape` key when opened, triggering the `onClose` callback.
- **Semantics:** The modal uses `role="dialog"` and `aria-modal="true"` to explicitly inform screen readers that content outside of it is currently inactive.
- **Reduced Motion:** If a user prefers reduced motion, the CSS safely suppresses the complex skew transform entirely. The modal simply appears instantly without the jello effect.
