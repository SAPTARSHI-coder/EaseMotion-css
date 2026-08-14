# Morphing Breadcrumb with Neumorphism

A responsive breadcrumb component featuring a soft neumorphic visual style
and smooth CSS-based morphing interactions.

## Features

- Neumorphic breadcrumb navigation
- Responsive horizontal layout
- Active breadcrumb state
- Smooth hover morphing
- Soft raised and inset shadows
- Shape and spacing transitions
- Responsive mobile behavior
- Semantic breadcrumb navigation
- Keyboard-visible focus states
- Reduced-motion support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

Breadcrumb labels and links can be changed inside the `<nav>` element
to match the desired page hierarchy.

## Technologies

- HTML5
- Vanilla CSS

## Accessibility

The navigation uses semantic `<nav>` markup with an accessible breadcrumb
label, `aria-current="page"` for the active location, keyboard focus states,
and `prefers-reduced-motion` support.

## Responsive Behavior

The breadcrumb remains usable on small screens through horizontal scrolling
while preserving the spacing and morphing interactions.

## Issue

Closes #78411