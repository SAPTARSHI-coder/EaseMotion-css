# Bounce-Pulse Drawer — Minimalist Tech Layouts

A CSS-only side drawer that bounces in from the left with an elastic spring, while each nav link pulses into place with staggered delays.

## How It Works

A hidden checkbox controls the open/close state. When checked, the drawer slides from `translateX(-105%)` to `translateX(0)` with a spring cubic-bezier that overshoots slightly. Each nav link gets a `bpd-pulse` keyframe animation with increasing `animation-delay` (60ms apart), so they appear to cascade in one by one.

The pulse keyframe moves each link from `translateX(-12px) scale(0.95)` through a slight overshoot at 60% to its final position. This gives the staggered feel of items bouncing into place.

## Responsive

On screens wider than 860px the drawer is always visible as a sidebar. The top bar and overlay are hidden, and the page uses flexbox to accommodate the fixed-width drawer.

## Accessibility

- `prefers-reduced-motion` disables all transitions and keyframe animations
- Overlay is clickable to close the drawer
- Semantic `<nav>` inside the drawer with `aria-label`
- Burger label has `aria-label` for screen readers
