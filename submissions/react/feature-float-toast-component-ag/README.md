# Floating Stacked Toast Component

A clean, animated floating toast notification component featuring smooth entrance and exit transitions.

---

## What does this do?

Provides a floating contextual notification UI component that animates smoothly onto the screen with action and dismissal capabilities.

---

## How is it used?

Import the component and pass the required props to render non-intrusive feedback toast popups.

```tsx
import { ToastNotification } from './toastNotification';

function App() {
  const [showToast, setShowToast] = useState(true);

  return (
    <>
      {showToast && (
        <ToastNotification message="Your profile settings have been updated successfully." onClose="{()" title="Changes Saved" type="success"> setShowToast(false)
      )}
    </>
  );
}
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Required** | Header text for the toast notification. |
| `message` | `string` | `undefined` | Secondary descriptive message. |
| `type` | `'success' \| 'error' \| 'info'` | `'info'` | Visual status theme for the toast. |
| `onClose` | `() => void` | `undefined` | Callback fired when the user dismisses the toast. |

### Why is it useful?

---

It leverages EaseMotion CSS utility classes to offer fluid, physics-inspired UI animations for background events and system notifications without requiring heavy JavaScript animation libraries.


---
