# CSS Animation Restart Sandbox

This sandbox demonstrates style recalculation behavior when re-applying CSS animation classes, comparing naive class swaps against forced DOM reflow solutions.

---

## Technical Details

To optimize rendering, modern browsers batch DOM changes. Removing a class and re-adding it immediately:
```javascript
element.classList.remove('my-animation');
element.classList.add('my-animation');
```
occurs in a single style resolution pass. As a result, the browser detects no state change and fails to replay keyframes.

### The Remediation
A style reflow must be forced between class modification calls. Reading a layout property (like `element.offsetWidth` or `element.clientHeight`) forces style recalculation:
```javascript
element.classList.remove('my-animation');
void element.offsetWidth; // Force Reflow
element.classList.add('my-animation');
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the **Naive Class Swap** card, click **Trigger Naive** repeatedly — verify the pulse animation fails to replay after the initial load.
3. In the **Forced Reflow** card, click **Trigger Reflow** multiple times — verify the pulse animation restarts cleanly on every click.
