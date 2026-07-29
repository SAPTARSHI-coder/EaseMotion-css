# Modal Hash Viewport Jump Prevention

This submission demonstrates and resolves viewport jumping issues in pure CSS anchor-based modals when clearing URL hash indicators.

---

## Technical Details

Pure CSS modals utilize the URL hash anchor format:
```html
<a href="#modal-id">Open</a>
<div id="modal-id">...</div>
```

Naively clearing the hash selector via `window.location.hash = ''` causes browsers to search for an empty target, scroll-shifting the viewport automatically back to the top coordinates.

### The Remediation
Instead of changing the hash directly, we update the navigation history state utilizing:
```javascript
history.replaceState(null, null, window.location.pathname + window.location.search);
```
This updates the browser URL, removes the hash reference, and keeps page scroll coordinates intact.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Scroll down until the trigger cards are centered in view.
3. Click **Open Naive Modal**, then click **Close and Jump** — verify the viewport jumps back to the top.
4. Scroll down again, click **Open Smooth Modal**, and click **Close Smoothly** — verify the modal closes with zero jumping.
