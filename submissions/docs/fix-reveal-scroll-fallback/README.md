# Fix: Reveal Scroll Fallback

Replaces the instant-reveal fallback in `core/reveal.js` (used when IntersectionObserver is unavailable) with a throttled scroll and resize event listener, so older browsers still get a scroll-triggered reveal effect.

## Usage

Open `demo.html` and scroll. Cards fade in as they enter the viewport using a `requestAnimationFrame`-throttled scroll listener. Click the button to switch between the current fallback (all revealed at once) and the proposed scroll-based fallback.

## Why

The current fallback reveals every element immediately on page load, removing any scroll-reveal experience for users on older browsers. A throttled scroll listener is a lightweight, well-supported progressive enhancement that gracefully degrades the reveal effect instead of disabling it entirely.
