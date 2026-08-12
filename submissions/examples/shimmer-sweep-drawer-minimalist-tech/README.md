# Shimmer-Sweep Drawer — Minimalist Tech Layouts

A CSS-only side drawer with a shimmer highlight that sweeps across the background when the drawer opens, while nav links fade in with staggered delays.

## How It Works

A hidden checkbox controls the open/close state. When checked, the drawer slides in with a spring cubic-bezier. A `::before` pseudo-element on the drawer — a skewed gradient band — runs a `ssd-shimmer` keyframe animation that moves from `-80%` to `130%` across the drawer width. The shimmer starts 100ms after the drawer opens for a natural sequence.

Each nav link starts at `opacity: 0 translateX(-8px)` and transitions to its resting state with staggered `transition-delay` values (120ms, 160ms, 200ms, 240ms, 280ms). This creates a cascading entrance that follows the shimmer sweep.

## Responsive

On screens wider than 840px the drawer is always visible as a sidebar. The shimmer animation is disabled and all links are immediately visible.

## Accessibility

- `prefers-reduced-motion` disables all transitions and the shimmer animation
- Overlay is clickable to close the drawer
- Semantic `<nav>` inside the drawer with `aria-label`
- Burger label has `aria-label` for screen readers
