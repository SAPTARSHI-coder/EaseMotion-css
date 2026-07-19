# ease-scroll-progress — @supports Fallback

**Fixes:** Issue #4222  
**Status:** Submission for maintainer review

## What this fixes

`.ease-scroll-progress` used `animation-timeline: scroll()` with no
browser-support guard, causing the progress bar to silently stay at 0% in
Firefox < 110 and Safari < 15.4.

## Solution

| Layer | Mechanism |
|---|---|
| Modern browsers | `@supports (animation-timeline: scroll())` wraps the CSS declaration |
| Legacy browsers | JS `scroll` event listener drives `scaleX()` directly |

## Files

| File | Purpose |
|---|---|
| `style.css` | CSS with `@supports` guard + `@keyframes` |
| `scroll-progress-fallback.js` | Feature-detects and applies JS fallback |
| `demo.html` | Live demonstration |

## Testing

- ✅ Chrome / Edge (latest) — CSS path
- ✅ Firefox 109 — JS fallback path
- ✅ Safari 15.3 — JS fallback path
- ✅ No errors, no visual difference between paths