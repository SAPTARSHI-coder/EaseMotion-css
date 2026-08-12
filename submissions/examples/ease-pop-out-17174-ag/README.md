# CSS Ease-Pop-Out Animation Example

This submission introduces the `ease-pop-out` animation, an elastic scale exit transition designed for elements popping out of existence.

---

## Technical Overview

The exit animation is optimized to capture attention immediately before scaling down:

1. **Rebound Phase (`25%`)**: Scales slightly upward (to `1.08`) using a rebound bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`). This mimics physics inertia.
2. **Collapse Phase (`100%`)**: Scales down to `0` and fades to transparent (`opacity: 0`).

---

## Usage

Apply the class `.ease-pop-out` to any element to trigger the transition.

```css
.card.dismissed {
  animation: easePopOut 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Click the close button (`×`) on any of the notification cards (e.g. **Pull Request Merged**).
3. Verify that the card bounces slightly larger before popping down to zero scale and disappearing.
4. Click **Reset Cards** at the top to re-show cards and test again.
5. In DevTools, toggle `prefers-reduced-motion` and verify the card fades out linearly without scaling.
