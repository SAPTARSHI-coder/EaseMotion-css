# Responsive Flyout Popover
A responsive, dependency-free, CSS-only flyout popover for the EaseMotion CSS gallery.

## Features
- Pure HTML and CSS — no JavaScript.
- Native `<details>` and `<summary>` provide the toggle interaction.
- Gradient glow styling with layered backgrounds and shadows.
- Stacked popover on smaller screens and floating flyout on larger screens.
- Smooth open and hover transitions.
- Keyboard-accessible native controls and links.
- Visible `:focus-visible` states.
- `prefers-reduced-motion` support.
- Component-level CSS custom properties that can map to EaseMotion design tokens.

## Usage
Keep `demo.html` and `style.css` together and open `demo.html` in a browser. No build step or dependency is required.

## Customization
The primary tokens are defined at the top of `style.css`, including `--em-bg`, `--em-surface`, `--em-border`, `--em-text`, `--em-muted`, `--em-accent`, `--em-accent-2`, and `--em-ease`. They can be mapped to existing EaseMotion variables during integration.

## Accessibility
The trigger uses native `<summary>` behavior, so it can be operated without JavaScript. Action items are native links, focus states are visible, decorative glow layers are hidden with `aria-hidden`, and reduced-motion preferences are respected.
