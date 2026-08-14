# ease-page-transition-fade

## Issue
**Issue #20549**: Animation: ease-page-transition-fade — page fades out and next page fades in

## Bug
No CSS utility existed for fade-based page transitions. Pages appeared and disappeared instantly on navigation, providing a jarring user experience with no visual continuity.

## Fix
Implemented a full-page fade transition system using CSS `@keyframes` that directly mirrors the View Transitions API specification:

```css
/* Production implementation */
@view-transition { navigation: auto; }

::view-transition-old(root) { animation: fadeOut 0.35s ease-in-out; }
::view-transition-new(root) { animation: fadeIn 0.35s ease-in-out; }
```

## CSS Classes Provided
| Class | Effect |
|---|---|
| `.fade-out` | Active page fades to `opacity: 0` in 0.35s |
| `.fade-in` | New page fades from `opacity: 0` to `1` in 0.35s |
| `.active-page` | Page is visible and interactive |

## Why It Works
The `@keyframes fadeOut` and `fadeIn` operate on `opacity` only, which is a compositor-only property — it triggers no layout or paint, keeping the transition hardware-accelerated and smooth. The 0.35s duration is aligned with human perceptual comfort for page-level transitions.

## Verification
Open `demo.html`. Click "Navigate → Products" — the current page gently fades to invisible, then the products page fades in. Click "← Back to Home" for the reverse. The CSS implementation block at the bottom shows the production-ready View Transitions API code.
