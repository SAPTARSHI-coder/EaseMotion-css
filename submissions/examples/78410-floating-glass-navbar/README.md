# Floating Navbar with Glassmorphism Styling

A responsive floating navigation bar with a translucent glass surface,
soft gradients, backdrop blur, rounded corners, and subtle interactions.

## Features

- Floating navigation layout
- Glassmorphism styling
- Translucent background
- `backdrop-filter` blur
- Soft gradient accents
- Active navigation state
- Hover underline animation
- CTA button
- Responsive mobile layout
- Keyboard-visible focus states
- Ambient animated background orbs
- Reduced-motion support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

Update the navigation labels and links to match the application where
the component is used.

## Technologies

- HTML5
- Vanilla CSS

## Accessibility

The navbar uses semantic navigation markup and native links.

Keyboard focus states are clearly visible through `:focus-visible`.
The component also respects the user's `prefers-reduced-motion` setting.

## Responsive Behavior

On desktop, the navbar displays branding, navigation links, and a CTA.

At smaller widths, the CTA is hidden to preserve available navigation
space while navigation links remain accessible.

## Issue

Closes #78410