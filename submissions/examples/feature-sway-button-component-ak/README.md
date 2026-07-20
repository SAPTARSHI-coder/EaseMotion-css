# Sway Button (feature-sway-button-component-ak)

A standalone React button that applies a smooth, continuous **sway**
(side-to-side tilt) animation. It's a lightweight way to draw the
user's eye to a call-to-action or signal an "active/loading" state
without a spinner.

## What it does

- Wraps a native `<button>` in a small React component (`SwayButton`).
- Applies a gentle rotate-left/rotate-right keyframe loop
  (`ease-sway-ak`) so the button rocks back and forth continuously.
- Adds a subtle hover glow and focus ring for better affordance.
- Fully accessible: real button semantics, keyboard focusable,
  `aria-busy` set automatically when `isLoading` is true.
- Respects `prefers-reduced-motion: reduce` — the sway animation is
  disabled entirely for users who have that OS/browser setting on.

## Usage

```jsx
import SwayButton from './SwayButton';

function Example() {
  return (
    <div className="ease-sway-button">
      <SwayButton onClick={() => console.log('clicked!')}>
        Notify Me
      </SwayButton>
    </div>
  );
}
```

### Props

| Prop        | Type      | Default | Description                                      |
|-------------|-----------|---------|---------------------------------------------------|
| `children`  | node      | —       | Button label/content                              |
| `className` | string    | `''`    | Extra class names to merge onto the button        |
| `isLoading` | boolean   | `false` | Adds an active state and sets `aria-busy`         |
| `...rest`   | any       | —       | Passed through to the underlying `<button>`       |

## Why it's useful

Micro-interactions like a sway effect give interfaces a bit of
personality and can nudge attention toward a primary action (e.g.
"Notify Me", "Try Now") without being as intrusive as a full loading
spinner. Because it's implemented with pure CSS keyframes and a
native `<button>`, it stays lightweight, accessible, and easy to
drop into any React project.

## Files

- `SwayButton.jsx` — the React component
- `style.css` — sway animation + button styling
- `README.md` — this file