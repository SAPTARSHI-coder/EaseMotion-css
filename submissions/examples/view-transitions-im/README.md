# View Transitions Page Router

## What does this do?
A ~80-line JS module that intercepts anchor clicks and wraps page navigation in the View Transitions API — giving every page load a smooth animated transition instead of a hard flash. Ships with 4 transition styles. Degrades gracefully to instant navigation on unsupported browsers.

## Files
- `view-transitions.js` — the router module
- `demo.html` — page 1 (circular reveal)
- `style.css` — shared page styles
- `README.md` — this file

## Transition Styles
| Style | Effect |
|---|---|
| `reveal` | Circular reveal from click position (EaseMotion signature) |
| `slide` | New page slides in from right |
| `scale` | New page scales up from center |
| `fade` | Simple cross-fade |

## How to use it
```html
<!-- 1. Include once in your layout -->
<script src="view-transitions.js"></script>

<!-- 2. Set style per-page via meta tag -->
<meta name="view-transition" content="reveal" />

<!-- 3. All anchor links automatically get transitions -->
<a href="/about.html">About</a>
<a href="/docs.html">Documentation</a>
```

## Advanced
```js
// Manual navigation
EaseViewTransitions.navigate('/page.html', 'slide');

// Listen for navigation events (re-init components)
window.addEventListener('vt:navigated', () => {
  // re-init any JS components
});
```

## Browser support
- **Chrome 111+, Edge 111+**: Full View Transitions API support
- **Safari 18+**: Supported
- **Firefox**: Not yet supported — instant navigation fallback
- **prefers-reduced-motion**: Transitions skipped automatically

## Why it fits EaseMotion CSS
The `clip-expand` circular reveal keyframe already exists in `docs/docs.css` — the maintainer designed this transition but never shipped it as a usable component. This makes it real. Every multi-page site using EaseMotion gets native app-feel transitions with one script include. No React, no router, no SPA required.
