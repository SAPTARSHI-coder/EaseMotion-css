# React Animated Scroll To Top Button Component (#22941)

An elegant, state-managed scroll-to-top button utilizing EaseMotion CSS for lifecycle animations.

## Features

- **Lifecycle Mounting Animations**:
  - Automatically listens to the `window.scrollY` position.
  - When the scroll threshold is exceeded, the component mounts into the DOM utilizing `.ease-slide-up`.
  - When scrolling back to the top, it intercepts the state change, applies `.ease-slide-down`, and waits for the CSS `onAnimationEnd` event before physically unmounting.
- **Micro-Interactions**: Hovering the button triggers `.ease-hover-scale` for a tactile feel.
- **Performance**: The scroll event listener is bound with `{ passive: true }` to ensure main-thread scroll performance remains buttery smooth.
- **Smooth Scrolling**: Clicking the button triggers a smooth scroll to the top natively via `window.scrollTo({ behavior: 'smooth' })`.

## Structure

- `ScrollTopButton.jsx` - The React component managing the scroll listener, visibility state, and delayed unmounting lifecycle.
- `style.css` - Component-specific styles handling the fixed positioning, backdrop-filters, and override logic for the exit animation.
- `demo.html` - A standalone demo page using Babel and React CDN, featuring an artificially tall body to demonstrate the scroll threshold.

## Usage

Simply open `demo.html` in your browser and scroll down the page. No build process is required for the demo.
