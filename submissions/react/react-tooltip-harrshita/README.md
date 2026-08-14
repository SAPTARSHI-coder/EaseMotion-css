# EaseTooltip React Component

A lightweight React tooltip wrapper using EaseMotion CSS tooltip classes.
Supports 4 positions, 2 themes, optional delay, and keyboard focus.

## Usage

```jsx
import { EaseTooltip } from './EaseTooltip';
import './style.css';

function App() {
  return (
    <EaseTooltip content="This is a tooltip" position="top" theme="dark">
      <button>Hover me</button>
    </EaseTooltip>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | required | Tooltip text |
| `position` | `top / bottom / left / right` | `top` | Tooltip placement |
| `theme` | `dark / light` | `dark` | Visual theme |
| `delay` | `number` | `0` | Show delay in milliseconds |
| `className` | `string` | `''` | Extra classes on wrapper |
| `children` | `ReactNode` | required | Trigger element |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tt-bg` | `#2d2d44` | Tooltip background |
| `--ease-tt-text` | `#ffffff` | Tooltip text color |
| `--ease-tt-radius` | `7px` | Border radius |
| `--ease-tt-gap` | `10px` | Distance from trigger |
| `--ease-tt-transition` | `0.2s ease` | Animation speed |

## Accessibility

- `aria-label` on the wrapper for screen reader context
- `role="tooltip"` and `aria-hidden` on the content element
- Keyboard focus triggers show/hide via `onFocus` and `onBlur`
- Animation disabled via `prefers-reduced-motion`

Closes #67722
