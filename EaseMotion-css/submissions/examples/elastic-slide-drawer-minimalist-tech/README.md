# Elastic-Slide Drawer — Minimalist Tech Layouts

A CSS-only side drawer that slides in from the left with a spring-elastic overshoot. Uses the checkbox hack — no JavaScript required.

## How It Works

A hidden `<input type="checkbox">` controls the open/close state. When checked, the page wrapper translates right by the drawer width, the drawer translates from `-100%` to `0`, and a dimmed overlay fades in. The spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` gives the drawer a slight overshoot before settling.

The burger icon transforms into an X using `translateY` and `rotate` on the top and bottom spans, with the middle span fading out.

## Responsive

On screens wider than 900px the drawer is always visible as a sidebar, the top bar hides, and the overlay is removed. The page uses flexbox to accommodate the fixed-width drawer.

## Accessibility

- `prefers-reduced-motion` disables all transitions
- Overlay is clickable to close the drawer
- Semantic `<nav>` inside the drawer with `aria-label`
- Burger label has `aria-label` for screen readers
