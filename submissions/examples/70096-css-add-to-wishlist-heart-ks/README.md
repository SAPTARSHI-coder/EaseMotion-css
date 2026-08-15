# CSS Add to Wishlist Heart

A responsive CSS-only wishlist button with a heart fill animation and floating heart particles.

## Features

- Pure HTML and CSS
- No JavaScript required
- Heart fill animation on selection
- Floating heart particle animation
- Responsive design
- Keyboard accessible
- Visible keyboard focus state
- Supports reduced-motion preferences
- Simple product-card integration

## Preview

The component displays an "Add to Wishlist" button with an outlined heart.

When the button is selected:

- The heart changes to a filled state.
- The heart performs a pop animation.
- Small hearts float upward.
- The button changes to "Added to Wishlist".

## How It Works

The component uses a native checkbox to maintain the wishlist state.

The checkbox is visually hidden while remaining available to keyboard users.

CSS sibling selectors detect the checked state:

```css
.wishlist-input:checked + .wishlist-button