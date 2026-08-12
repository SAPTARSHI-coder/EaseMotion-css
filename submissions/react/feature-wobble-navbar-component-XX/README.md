# Wobble Navbar Component (feature-wobble-navbar-component-XX)

## What it does
A React navbar component that **drops into view** on mount with a
playful wobble-settle animation — it overshoots slightly on rotation
and position, then eases back to rest. Useful for landing pages or
apps that want an energetic first impression without being distracting.

## How to use
```jsx
import WobbleNavbar from './WobbleNavbar';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="ease-wobble-navbar-XX-wrapper">
      <WobbleNavbar links={links} />
    </div>
  );
}
```

You can also pass custom children instead of a `links` array:
```jsx
<WobbleNavbar>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</WobbleNavbar>
```

### Props

| Prop     | Type     | Default | Description                              |
|----------|----------|---------|-------------------------------------------|
| `links`  | array    | `[]`    | Array of `{ label, href }` nav link objects |
| `children` | node   | —       | Custom content, used if `links` is empty  |

## Why it's useful
- **Zero dependencies**: pure CSS keyframe animation, no animation library required.
- **Drop-in**: works as a standalone component in any React app.
- **Configurable content**: supports either a simple links array or fully custom children.
- **Accessible**:
  - Rendered as a semantic `<nav>` with `role="navigation"` and `aria-label="Primary"`.
  - Links are keyboard-focusable with a visible `:focus-visible` state.
  - Fully respects `prefers-reduced-motion: reduce` — the wobble/drop
    animation is disabled and the navbar renders in its final resting
    state immediately for users who prefer reduced motion.

## Accessibility notes
- Uses native `<nav>` and `<a>` elements rather than `<div>`/`<span>`
  with click handlers, so screen readers and keyboard users get
  expected navigation semantics for free.
- Animation is purely decorative (opacity/transform on the navbar
  shell) and never delays or blocks the links from being interactive.
