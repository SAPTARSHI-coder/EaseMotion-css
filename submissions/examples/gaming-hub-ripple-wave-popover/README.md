# EaseMotion Ripple-Wave Popover

A production-ready, pure CSS Ripple-Wave popover designed for gaming hubs, SaaS platforms, and modern web applications. This example showcases a team communication panel with live voice chat notifications, fully leveraging EaseMotion's utility classes.

## Features

- **Pure CSS Ripple-Wave Effect**: Complex ripple wave animations for background styling and user activity, executed purely with CSS `@keyframes` and `:hover`/`:focus-within` states. No JavaScript is required.
- **Premium Glassmorphism Design**: High-fidelity translucent backgrounds utilizing `backdrop-filter` combined with subtle inset shadows and gradient text to achieve a AAA gaming aesthetic.
- **Accessible & Semantic**: Full keyboard navigation support via `:focus-within` and explicit `aria-*` tags for screen readers, allowing users to seamlessly interact via Tab navigation.
- **Responsive & Fluid**: Adapts gracefully to mobile and desktop screens.
- **Reduced Motion Support**: Strictly respects `@media (prefers-reduced-motion: reduce)` system settings by disabling repeating ripple animations and simplifying layout transitions for users with motion sensitivities.

## Folder Structure

- `demo.html`: The HTML layout integrating the interactive popover and EaseMotion utility classes.
- `style.css`: Custom component styling, variables, glassmorphism, and the core ripple wave mechanics.
- `README.md`: Component documentation.

## How to Run

1. Clone the EaseMotion repository.
2. Navigate to the `submissions/examples/gaming-hub-ripple-wave-popover/` directory.
3. Open `demo.html` in any modern web browser to view the showcase.

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-slide-up`
- `ease-scale-up`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`

## Responsive Behaviour

The dashboard layout utilizes flexible CSS Box Alignment (Flexbox) and fluid spacing. On viewports smaller than `640px`, the dashboard condenses and optimizes its spatial footprint while maintaining the popover's integrity, ensuring mobile gamers have the exact same premium experience.

## Accessibility Details

- **Keyboard Support**: The main trigger (`.voice-trigger`) and the inner popover controls use semantic `<button>` tags, and list rows use `tabindex="0"`. The popover utilizes `:focus-within` to remain visibly open during deep keyboard traversal.
- **Screen Reader Context**: Rich use of `role="dialog"`, `aria-haspopup`, `aria-expanded`, and descriptive `aria-label` tags guarantees that visual indicators (like active/muted statuses) translate perfectly into screen reader terminology.
- **Visible Focus States**: Global customized focus rings ensure accessibility isn't compromised by the dark, low-contrast aesthetic.

## Why it fits EaseMotion CSS

The Ripple-Wave popover demonstrates how EaseMotion's entrance animation utilities (`ease-fade-in`, `ease-slide-up`) integrate gracefully with advanced, custom-built CSS interaction patterns. It provides an excellent real-world example of building highly interactive, complex UI components—standard in modern web ecosystems—without sacrificing code quality or relying on JavaScript overhead.
