# Fade-In Drawer — Minimalist Tech Layouts

A CSS-only side drawer that fades in while sliding from the left. Each nav link appears with a staggered delay for a smooth cascading entrance.

## How It Works

A hidden checkbox controls the open/close state. When checked, the drawer transitions from `translateX(-100%) opacity: 0` to `translateX(0) opacity: 1`. Each nav link starts at `opacity: 0 translateX(-8px)` and transitions to full opacity and position with increasing `transition-delay` values (60ms, 100ms, 140ms, 180ms, 220ms).

This staggered approach means links don't use keyframes — they rely on the transition delay being removed when the checkbox is unchecked, creating a reverse cascade on close.

## Responsive

On screens wider than 840px the drawer is always visible as a sidebar with all links at full opacity. The top bar and overlay are hidden.

## Accessibility

- `prefers-reduced-motion` disables all transitions
- Overlay is clickable to close the drawer
- Semantic `<nav>` inside the drawer with `aria-label`
- Burger label has `aria-label` for screen readers
