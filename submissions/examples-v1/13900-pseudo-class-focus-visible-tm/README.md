# Pseudo-Class :focus-visible Demo

Demonstrates the :focus-visible selector for accessible keyboard navigation feedback, showing how to style focus rings distinctly for keyboard vs mouse users while leveraging EaseMotion design tokens.

## Features

- Uses the `:focus-visible` selector to distinguish keyboard from mouse focus, improving accessibility without visual clutter
- Styled with EaseMotion `--ease-*` design tokens for consistent timing and color across the framework
- Multiple button variants with distinct hover and focus states: primary, secondary, success, and danger
- Keyboard-navigable demo with visible focus rings on Tab navigation
- Dark mode support via `prefers-color-scheme: dark` media query
- Reduced motion support via `prefers-reduced-motion: reduce`
- Custom focus ring using `outline-offset` and `box-shadow` from the EaseMotion token system

## Usage

Add the CSS class to your element:

```html
<button class="focus-demo-btn">Primary Button</button>
<input type="text" class="focus-demo-input" placeholder="Enter text..." />
```

## Why is it useful?

The `:focus-visible` selector is part of the WCAG 2.1 accessibility guidelines (Success Criterion 2.4.7 Focus Visible). By using `var(--ease-color-primary)` for the focus ring and `var(--ease-glow-primary)` for the shadow, submissions integrate cleanly with the EaseMotion design system while providing clear keyboard navigation feedback.
