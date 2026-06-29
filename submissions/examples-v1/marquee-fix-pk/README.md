# EaseMotion — Marquee Bug Fix Demo

Demonstrates fixes for two bugs in the `ease-marquee` component:

1. **Resize stutter** — marquee text visibly jumps or restarts when viewport/container width changes
2. **Tab-visibility speed burst** — marquee runs at incorrect speed (double-time) after switching back to a background tab

## Bugs

| Bug | Root Cause | Fix |
|-----|-----------|-----|
| Resize stutter | CSS animation recalculates `translateX` on layout change; percentage-based transform snaps | Pause animation during resize via debounced JS, resume after 150ms |
| Tab speed burst | `requestAnimationFrame` freezes during tab switch; on return, browser tries to "catch up" the animation | Use `document.visibilitychange` to pause when tab is hidden, resume when visible |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side comparison: buggy (CSS-only) vs fixed (JS-enhanced) marquee |
| `style.css` | Demo page layout and comparison card styles |

## Usage

Open `demo.html` directly in a browser. Use the resize buttons or manually resize the viewport. Switch to another tab and back to see the tab-visibility fix.

## How to Apply the Fix

Add this script to any page using `ease-marquee`:

```javascript
// Resize fix — pause during resize, resume after 150ms debounce
let resizeTimer;
window.addEventListener('resize', () => {
  document.querySelectorAll('.ease-marquee-track')
    .forEach(el => el.style.animationPlayState = 'paused');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll('.ease-marquee-track')
      .forEach(el => el.style.animationPlayState = '');
  }, 150);
});

// Tab visibility fix — pause when hidden, resume when visible
document.addEventListener('visibilitychange', () => {
  document.querySelectorAll('.ease-marquee-track')
    .forEach(el => {
      el.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
});
```

For a `core/marquee.js` integration, save the snippet above as a standalone script loaded after `easemotion.css`.
