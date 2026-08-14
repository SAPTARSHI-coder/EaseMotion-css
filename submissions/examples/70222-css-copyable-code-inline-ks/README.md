# CSS Copyable Code Inline

A clean and responsive inline code component built entirely with HTML and CSS. The component provides a compact code presentation with a copy-style icon, hover tooltip, keyboard focus state, and responsive behavior.

## Features

- Pure CSS implementation
- Inline code presentation
- Copy-style icon interaction
- Hover tooltip
- Keyboard-accessible focus state
- Responsive layout for mobile devices
- Smooth hover and press animations
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Demo markup and component structure
- `style.css` — Complete styling, animations, responsive behavior, and accessibility states
- `README.md` — Documentation and usage instructions

## Usage

Add the following HTML structure wherever an inline code snippet needs to be displayed:

    <button class="copy-code" type="button" aria-label="Copy code">
        <code>npm install easemotion-css</code>
        <span class="copy-icon" aria-hidden="true">⧉</span>
        <span class="copy-tooltip" role="status">
            Copy code
        </span>
    </button>

Include the stylesheet:

    <link rel="stylesheet" href="style.css">

## Accessibility

The component uses a native `<button>` element to provide keyboard accessibility.

- `aria-label` provides an accessible name for the control.
- `:focus-visible` provides a clear keyboard focus indicator.
- Decorative icons use `aria-hidden="true"`.
- The component supports `prefers-reduced-motion` for users who prefer reduced animation.

## Responsive Behavior

On smaller screens, the component adapts to the available width. The code control expands to the available space while maintaining readable spacing and typography.

## Animations

The component includes subtle CSS transitions for:

- Hover elevation
- Icon interaction
- Press feedback
- Tooltip appearance

Animations are disabled when the user has enabled reduced-motion preferences.

## Note

This is a **CSS-only implementation**.

CSS cannot directly write text to the system clipboard. Therefore, this implementation focuses on the visual copy-control experience, hover states, focus states, and responsive behavior without using JavaScript.

## Browser Compatibility

The component uses standard HTML and CSS features and is designed to work in modern browsers.

## Issue

EaseMotion CSS Issue #70222 — CSS Copyable Code Inline

