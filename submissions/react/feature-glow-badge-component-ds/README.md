# Glow Badge (Error State)

A React component that displays a glowing badge for error states, alerts, warnings, and status indicators.

## Features

- Smooth glowing animation effect
- Beginner-friendly and reusable component
- Accessible implementation using semantic attributes
- Supports `prefers-reduced-motion`
- Customizable content through props

## Folder Structure

```text
feature-glow-badge-component-ds/
├── GlowBadge.jsx
├── style.css
└── README.md
```

## Usage

### Import the component

```jsx
import GlowBadge from "./GlowBadge";
```

### Example

```jsx
function App() {
  return (
    <div>
      <GlowBadge>Error</GlowBadge>
    </div>
  );
}
```

## Component Code

```jsx
<GlowBadge>Error</GlowBadge>
```

## Output

Displays a pill-shaped badge with a smooth red glow animation to indicate an error state.

## Accessibility

- Uses `role="status"` and `aria-label`.
- Respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .glow-badge-ds {
    animation: none;
  }
}
```

## Why is it useful?

Glow badges help users quickly identify important statuses such as errors, warnings, failed operations, or notifications while maintaining a modern and visually appealing UI.

---

Created for **EaseMotion CSS React Track** 🚀
